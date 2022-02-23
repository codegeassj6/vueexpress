<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use Auth;
use App\Models\User;
use App\Models\Product;
use App\Models\Cart;
use Validator;
use App\Models\Order;
use App\Models\Variant;

class CartController extends Controller
{
    public function getCartItemsCount() {
        $collections = collect([]);
        $product_count = Product::whereIn('id', Auth::user()->getCartItems->pluck('product_id'))->orderBy('store_id', 'asc')->get();
        $cart_items = Cart::where('user_id', Auth::id())->get();

        foreach($cart_items as $key => $item) {
            $item_variant = $item->getVariants->where('variant', $item->variant)->first();
            $collections[$key] = Product::where('id', $item->product_id)->first();
            $collections[$key]->quantity = $item->quantity;
            $collections[$key]->variant = $item->variant;
            $collections[$key]->variantDetails = $item_variant;
            $collections[$key]->cart_id = $item->id;
            $collections[$key]->store = $item->getStoreDetails;

            // get the counts of product avail
            if($item_variant->stock != 0) {
                $collections[$key]->count = $item->quantity;
            } else {
                $collections[$key]->count = 0;
            }
        }

        return response()->json([$collections->groupBy('store.name'), $collections->pluck('count')->sum()]);
    }

    public function addToCart(Request $request) {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|numeric|exists:products,id',
            'quantity' => 'required|numeric|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        }

        //check if the product is already in cart
        $exist = Cart::where('user_id', Auth::id())->where('product_id', $request->input('product_id'))->where('variant', $request->input('variant'))->first();

        $variant = Variant::where('product_id', $request->input('product_id'))->where('variant', $request->input('variant'))->firstOrFail();

        // if trying to add more but stock is less
        if($exist) {
            if(($exist->quantity += $request->input('quantity')) > $variant->stock) {
                $left = $exist->quantity -= $variant->stock;
                return response()->json(['error' => 'You have exceeded the limit! You can only add '. $left], 200);
            } else {
                $exist->save();
            }

        } else {
            // if quantity is greater than stock
            if($request->input('quantity') > $variant->stock) {
                return response()->json(['error' => 'You have exceeded the limit! Only '. $variant->stock . 'left!'], 200);
            }

            Cart::create([
                'user_id' => Auth::id(),
                'product_id' => $request->input('product_id'),
                'quantity' => $request->input('quantity'),
                'variant' => $request->input('variant')
            ]);
        }

        return response()->json(['success'], 200);
    }

    public function increaseQuantity(Request $request) {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|numeric|exists:products,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        }

        //check if the product is already in cart
        $exist = Cart::where('user_id', Auth::id())->where('product_id', $request->input('product_id'))->where('variant', $request->input('variant'))->firstOrFail();
        $exist->quantity = $exist->quantity += 1;
        $exist->save();

        return response()->json(['ok' => 'yes'], 200);
    }

    public function decreaseQuantity(Request $request) {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|numeric|exists:products,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        }

        //check if the product is already in cart
        $exist = Cart::where('user_id', Auth::id())->where('product_id', $request->input('product_id'))->where('variant', $request->input('variant'))->firstOrFail();

        // deducting the quantity && skip deduct if quantity is below 1
        if($exist->quantity >= 2) {
            $exist->quantity = $exist->quantity -= 1;
            $exist->save();
        } else {
            if($exist->quantity <= 1) {
                $exist->delete();
            }
        }
        return response()->json(['message' => ''], 200);
    }

    public function changeQuantity(Request $request, $id) {
        $validator = Validator::make($request->all(), [
          'product_id' => 'required|numeric|exists:products,id',
          'quantity' => 'numeric|required',
        ]);

        if ($validator->fails()) {
          return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        }

        $product = Product::where('id', $request->input('product_id'))->firstOrFail();
        $auth_cart = Cart::where('user_id', Auth::id())
            ->where('product_id', $product->id)
            ->where('id', $id)
            ->where('variant', $request->input('variant'))
            ->firstOrFail();

        $auth_cart->quantity = $request->input('quantity');
        if($auth_cart->quantity == 0) {
          $auth_cart->delete();
        } else {
          $auth_cart->save();
        }

        return response()->json('', 200);
    }

    public function deleteAll(Request $request) {
        $items = Cart::where('user_id', Auth::id())->whereIn('id', $request->input('id'))->delete();
    }

    public function createOrder(Request $request) {
        $cart_items = Cart::where('user_id', Auth::id())->whereIn('id', $request->input('id'))->get();
        if($cart_items->count()) {
            foreach($cart_items as $key => $item) {
                if($key == 0) {
                    $group = $item->id;
                }

                $variant = Variant::where('product_id', $item->product_id)->where('variant', $item->variant)->firstOrFail();
                $variant->stock -= $item->quantity;
                if($variant->stock <= 0) {
                    return response()->json(['error' => 'No more or few stocks left'], 200);
                }
                $variant->save();

                Order::create([
                    'user_id' => Auth::id(),
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'total_price' => $variant->price * $item->quantity,
                    'variant' => $item->variant,
                    'status' => 0,
                    'fee' => 60,
                    'group' => $group,
                ]);
            }

            Cart::where('user_id', Auth::id())->whereIn('id', $request->input('id'))->delete();
            return $this->getCartItemsCount();
        }


    }
}
