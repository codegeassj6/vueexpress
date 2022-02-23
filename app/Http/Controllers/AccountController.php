<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validator;
use App\Models\User;
use App\Models\Order;
use App\Models\Review;
use Hash;
use Illuminate\Support\Facades\Storage;

class AccountController extends Controller
{
    public function updateProfile(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'email:rfc,dns',

        ]);
        if($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        }

        Auth::user()->fill($request->all())->save();
        return response()->json(['', 200]);
    }

    public function updateProfilePicture(Request $request) {
        $newfilename = uniqid() .".".$request->file->getClientOriginalExtension();
        
        $request->file->storeAs('profile/picture/'. Auth::user()->id, $newfilename, 's3');
        return response()->json(['message' => $newfilename], 200);
    }

    public function updatePassword(Request $request) {
        $validator = Validator::make($request->all(), [
            'password' => 'string|required',
            'new_password' => 'string|required',
        ]);

        if($validator->fails()) {
            return response()->json(['error' => $validator->messages()->get('*')], 500);
        }

        if(!Hash::check($request->input('password'), Auth::user()->password)) {
            return response()->json(['message' => 'Invalid Password'], 500);
        }

        Auth::user()->password = Hash::make($request->input('new_password'));
        Auth::user()->save();
        return response()->json(['message' => 'success'], 200);
    }

    public function reviewProduct(Request $request) {
        $orders = Order::where('user_id', Auth::id())->where('status', 1)->orderBy('created_at', 'DESC')->get();
        foreach($orders as $key => $order) {
            $orders[$key]->product = $order->getProductDetails;
            $orders[$key]->rate = null;
            $orders[$key]->review = $order->getComment;
            if($orders[$key]->review) {
                $orders[$key]->editable = true;
            } else {
                $orders[$key]->editable = false;
            }
        }

        return $orders;
    }

    public function postReview(Request $request) {
        // $validator = Validator::make($request->all(), [
        //     'email' => 'email:rfc,dns'
        // ]);
        // if($validator->fails()) {
        //     return redirect()->back()->withErrors($validator)->withInput()->with('danger', 'Something Went Wrong! Please Check the Field...');
        // }

        Review::updateOrCreate([
            'user_id' => Auth::id(),
            'product_id' => $request->input('product_id'),
        ], [
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating')
        ]);

        return response()->json(['success'], 200);
    }

}
