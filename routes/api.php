<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    //
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    //
    Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthController@me');
});

Route::group(['prefix' => 'products'], function ($router) {
    Route::get('/', 'App\Http\Controllers\ProductController@userAvailProducts')->middleware('auth');
    Route::get('/search', 'App\Http\Controllers\ProductController@search')->middleware('auth');
    Route::get('/{id}', 'App\Http\Controllers\ProductController@getItem')->middleware('auth');
    Route::get('/review/{id}', 'App\Http\Controllers\ProductController@getItemReview')->middleware('auth');
});

Route::group(['prefix' => 'cart'], function ($router) {
    Route::get('/', 'App\Http\Controllers\CartController@getCartItemsCount')->middleware('auth');
    Route::post('/add/item', 'App\Http\Controllers\CartController@addToCart')->middleware('auth');
    Route::post('/increase/product/quantity', 'App\Http\Controllers\CartController@increaseQuantity')->middleware('auth');
    Route::post('/decrease/product/quantity', 'App\Http\Controllers\CartController@decreaseQuantity')->middleware('auth');

    Route::post('/quantity/{id}', 'App\Http\Controllers\CartController@changeQuantity')->middleware('auth');

    Route::delete('/delete', 'App\Http\Controllers\CartController@deleteAll')->middleware('auth');

    Route::post('/order', 'App\Http\Controllers\CartController@createOrder')->middleware('auth');
});

Route::group(['prefix' => 'store'], function ($router) {
    Route::post('/add', 'App\Http\Controllers\StoreController@create')->middleware('auth');
    Route::post('/voucher/claim', 'App\Http\Controllers\VoucherController@claimVoucher')->middleware('auth');

    Route::get('/', 'App\Http\Controllers\StoreController@index')->middleware('auth');
    Route::get('/products/{id}', 'App\Http\Controllers\StoreController@storeProduct')->middleware('auth');
    Route::get('/{id}/products/name', 'App\Http\Controllers\StoreController@storeProductSearch')->middleware('auth');
    Route::get('/{id}/products/sale', 'App\Http\Controllers\StoreController@storeProductSale')->middleware('auth');
    Route::get('/voucher/{id}', 'App\Http\Controllers\VoucherController@index')->middleware('auth');
});

Route::group(['prefix' => 'account'], function ($router) {
    Route::post('/profile', 'App\Http\Controllers\AccountController@updateProfile')->middleware('auth');
    Route::post('/profile/update/password', 'App\Http\Controllers\AccountController@updatePassword')->middleware('auth');
    Route::get('/review', 'App\Http\Controllers\AccountController@reviewProduct')->middleware('auth');
    Route::post('/review', 'App\Http\Controllers\AccountController@postReview')->middleware('auth');
});

Route::group(['prefix' => 'order'], function ($router) {
    Route::get('/', 'App\Http\Controllers\OrderController@getOrders')->middleware('auth');
    Route::get('/receive', 'App\Http\Controllers\OrderController@getToReceive')->middleware('auth');
    Route::get('/complete', 'App\Http\Controllers\OrderController@getComplete')->middleware('auth');
});

Route::group(['prefix' => 'notifications'], function ($router) {
    Route::post('/subscribe', 'App\Http\Controllers\NotificationController@subscribeLetter')->middleware('auth');
});

Route::group(['prefix' => 'upload'], function ($router) {
    Route::group(['prefix' => 'user'], function ($router) {
        Route::post('/image', 'App\Http\Controllers\AccountController@updateProfilePicture')->middleware('auth');
    });
});

Route::group(['prefix' => 'admin'], function ($router) {
    Route::get('/', 'App\Http\Controllers\AdminController@index');
});
