<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Models\Product;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Store::where('location',  'LIKE', '%' . 'davao' . '%')->get();
    }

    public function storeProduct($id) {
        $store = Store::where('id', $id)->first();
        $products = Product::where('store_id', $store->id)->get();
        foreach($products as $key => $product) {
            $product->store = $product->getStoreDetails->name;
            $product->price = $product->getVariants->first()->price;
        }

        return $products;
    }

    public function storeProductSearch(Request $request, $id) {
        $products = Product::where('name',  'LIKE', '%' . $request->input('query') . '%')->where('store_id', $id)->get();
        foreach($products as $key => $product) {
            $product->store = $product->getStoreDetails->name;
            $product->price = $product->getVariants->first()->price;
        }

        return $products;
    }

    public function storeProductSale($id) {
        // $products = Product::where('sale', '>', 0)->where('store_id', $id)->get();
        // foreach($products as $key => $product) {
        //     $product->store = $product->getStoreDetails->name;
        // }
        // return $products;

        $store = Store::where('id', $id)->first();
        $products = Product::where('store_id', $store->id)->get();
        foreach($products as $key => $product) {
            $product->store = $product->getStoreDetails->name;
            $product->price = $product->getVariants->first()->price;
        }

        return $products;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        Store::create([
            'name' => 'JM Shawarma',
            'type' => 'Food',
            'location' => json_encode([0 => 'panabo', 1 => 'tagum', 2 => 'davao'])
        ]);

        return response()->json('good');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function show(Store $store)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function edit(Store $store)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Store $store)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function destroy(Store $store)
    {
        //
    }
}
