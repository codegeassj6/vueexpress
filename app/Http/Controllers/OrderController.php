<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Auth;
// use Collection;
use App\Models\Product;

class OrderController extends Controller
{
    public function getOrders() {
        $overall = null;
        $group = null;
        $orders = Order::where('user_id', Auth::id())->orderBy('updated_at', 'desc')->orderBy('created_at', 'DESC')->get();
        foreach($orders as $key => $order) {
            $orders[$key] = $order->getProductDetails;
            $orders[$key]->store = $order->getStoreDetails;
            $orders[$key]->quantity = $order->quantity;
            $orders[$key]->fee = $order->fee;
            // $orders[$key]->total = $order->fee += ($order->quantity *  $order->getVariants->where('variant', $order->variant)->first()->price);
            $orders[$key]->price = $order->getVariants->where('variant', $order->variant)->first()->price;
            $orders[$key]->variant = $order->variant;
            $orders[$key]->group = $order->group;
            $overall = $overall += $order->total_price;
            $group = $order->group;
        }

        return response()->json([$orders->groupBy('group'), $overall, $orders->pluck('fee')->first(), $group], 200);
    }
    public function getToReceive() {
        $overall = null;
        $group = null;
        $orders = Order::where('user_id', Auth::id())->where('status', 0)->orderBy('updated_at', 'desc')->orderBy('created_at', 'DESC')->get();
        foreach($orders as $key => $order) {
            $orders[$key] = $order->getProductDetails;
            $orders[$key]->store = $order->getStoreDetails;
            $orders[$key]->quantity = $order->quantity;
            $orders[$key]->fee = $order->fee;
            // $orders[$key]->total = $order->fee += ($order->quantity *  $order->getVariants->where('variant', $order->variant)->first()->price);
            $orders[$key]->price = $order->getVariants->where('variant', $order->variant)->first()->price;
            $orders[$key]->variant = $order->variant;
            $orders[$key]->group = $order->group;
            $overall = $overall += $order->total_price;
            $group = $order->group;
        }

        return response()->json([$orders->groupBy('group'), $overall, $orders->pluck('fee')->first(), $group], 200);

        // $overall = null;
        // $orders = Order::where('user_id', Auth::id())->where('status', 0)->orderBy('updated_at', 'desc')->get();
        // foreach($orders as $key => $order) {
        //     $orders[$key] = $order->getProductDetails;
        //     $orders[$key]->store = $order->getStoreDetails;
        //     $orders[$key]->quantity = $order->quantity;
        //     $orders[$key]->fee = $order->fee;
        //     $orders[$key]->variant = $order->variant;
        //     // $orders[$key]->total = $order->fee += ($order->quantity *  $order->getProductDetails->price);
        //     $orders[$key]->group = $order->group;
        //     $overall = $overall += $order->total_price;
        // }

        // return response()->json([$orders->groupBy('group'), $overall, $orders->pluck('fee')->first()], 200);
    }

    public function getComplete() {
        $overall = null;
        $orders = Order::where('user_id', Auth::id())->where('status', 1)->orderBy('updated_at', 'desc')->get();
        foreach($orders as $key => $order) {
            $orders[$key] = $order->getProductDetails;
            $orders[$key]->store = $order->getStoreDetails;
            $orders[$key]->quantity = $order->quantity;
            $orders[$key]->fee = $order->fee;
            // $orders[$key]->total = $order->fee += ($order->quantity *  $order->getProductDetails->price);
            $orders[$key]->variant = $order->variant;
            $orders[$key]->group = $order->group;
            $overall = $overall += $order->total_price;
        }

        return response()->json([$orders->groupBy('group'), $overall, $orders->pluck('fee')->first()], 200);
    }
}
