<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Collection;
use App\Models\Product;
use App\Models\User;
use App\Models\Store;
use App\Models\Review;
use Auth;


class ProductController extends Controller
{
    public function userAvailProducts() {
        $products = DB::table('products')
            ->where(DB::raw('(select location from stores where id = products.store_id)'), 'LIKE',  '%' . Auth::user()->city . '%')
            ->select('products.*', DB::raw('(select price from variants where product_id = products.id order by price asc limit 1) as price'));
            // ->leftJoin('variants', function($query) {
            //     $query->on('products.id', '=', 'variants.product_id')
            //     ->where('variants.price', '=', DB::raw("(select min(`price`) from variants where variants.product_id = products.id)"));
        // });

        return $products->inRandomOrder()->paginate(24);
    }

    public function search(Request $request) {
        $stores = DB::table('stores')->where('location',  'LIKE', '%' . Auth::user()->city . '%')->get();
        
        if($request->input('query')) {
            $products = DB::table('products')
                        ->where('name', 'LIKE', '%' . $request->input('query') . '%')
                        ->whereIn('store_id', $stores->pluck('id'))
                        ->select('products.*', DB::raw('(select price from variants where product_id = products.id order by price asc limit 1) as price'))->leftJoin('variants', function($query) {
                                    $query->on('products.id', '=', 'variants.product_id')
                                    ->where('variants.price', '=', DB::raw("(select min(`price`) from variants where variants.product_id = products.id)"));
                        })->distinct();
        } else {
            $products = DB::table('products')
                        ->whereIn('store_id', $stores->pluck('id'))
                        ->select('products.*', DB::raw('(select price from variants where product_id = products.id order by price asc limit 1) as price'))->leftJoin('variants', function($query) {
                                    $query->on('products.id', '=', 'variants.product_id')
                                    ->where('variants.price', '=', DB::raw("(select min(`price`) from variants where variants.product_id = products.id)"));
                        })->distinct();
        }
        
        
        
        if($request->input('check')) {
            $products->whereIn('category',  $request->input('check'));
        }

        if($request->input('rating')) {
            $products->where('average_rating', '>=', $request->input('rating'));
        }

        if($request->input('price_min')) {
            $products->where('price', '>=', $request->input('price_min'));
        }

        if($request->input('price_max')) {
            $products->where('price', '<=', $request->input('price_max'));
        }
        
        if(!$request->input('sort')) {
            $products->orderByDesc('average_rating');
        } else {
            if($request->input('sort') == 'asc') {
                $products->orderBy('price');
            } else {
                $products->orderByDesc('price');
            }
        }
        
        return $products->paginate(24);
        
        
        
        
        // if($request->input('query')) {
        //     $products = DB::table('products')
        //     ->where('name',  'LIKE', '%' . $request->input('query') . '%')
        //     ->where(DB::raw('(select location from stores where id = products.store_id)'), 'LIKE',  '%' . Auth::user()->city . '%')
        //     ->select('products.*', DB::raw('(select price from variants where product_id = products.id order by price asc limit 1) as price'))
        //     ->orWhere('sub_category', 'LIKE',  '%' . $request->input('query') . '%')
        //     ->leftJoin('variants', function($query) {
        //         $query->on('products.id', '=', 'variants.product_id')
        //         ->where('variants.price', '=', DB::raw("(select min(`price`) from variants where variants.product_id = products.id)"));
        //     })->distinct();
        // } else {
        //     $products = DB::table('products')
        //     ->where(DB::raw('(select location from stores where id = products.store_id)'), 'LIKE',  '%' . Auth::user()->city . '%')
        //     ->select('products.*', DB::raw('(select price from variants where product_id = products.id order by price asc limit 1) as price'))
        //     ->orWhere('sub_category', 'LIKE',  '%' . $request->input('query') . '%')
        //     ->leftJoin('variants', function($query) {
        //         $query->on('products.id', '=', 'variants.product_id')
        //         ->where('variants.price', '=', DB::raw("(select min(`price`) from variants where variants.product_id = products.id)"));
        //     })->distinct();
        // }
        
        // if($request->input('check')) {
        //     $products->whereIn('category',  $request->input('check'));
        // }
        

        // if(!$request->input('sort')) {
        //     $products->orderByDesc('average_rating');
        // } else {
        //     if($request->input('sort') == 'asc') {
        //         $products->orderBy('price');
        //     } else {
        //         $products->orderByDesc('price');
        //     }
        // }

        // if($request->input('rating')) {
        //     $products->where('average_rating', '>=', $request->input('rating'));
        // }

        // if($request->input('price_min')) {
        //     $products->where('price', '>=', $request->input('price_min'));

        // }

        // if($request->input('price_max')) {
        //     $products->where('price', '<=', $request->input('price_max'));
        // }

        // return $products->paginate(24);
    }

    public function getItem(Request $request, $id) {
        // $product = Product::where('id', $id)->first();
        // $product->store =  $product->getStoreDetails;
        // return response()->json(['product' => $product]);

        $product = Product::where('id', $id)->first();
        $product->variant = $product->getVariants;
        foreach($product->variant as $key=> $variant) {
            if($key == 0) {
                $product->variant[$key]->selected = true;
            } else {
                $product->variant[$key]->selected = false;
            }

        }
        $product->store =  $product->getStoreDetails;
        return response()->json(['product' => $product]);
    }

    public function getItemReview(Request $request, $id) {
        $reviews = Review::where('product_id', $id)->orderBy('created_at', 'DESC');
        if($request->input('rating')) {
            $reviews = $reviews->where('rating', '=', $request->input('rating'))->get();
        } else {
            $reviews = $reviews->get();
        }

        foreach($reviews as $key => $review) {
            $reviews[$key]->userFirstName = $review->getUser->first_name;
            $reviews[$key]->userLastName = $review->getUser->last_name;
        }

        return $reviews;
    }
}
