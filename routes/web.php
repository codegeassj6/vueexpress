<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function ($router) {
//     Route::get('/{any}', 'App\Http\Controllers\AuthController@login')->middleware('auth');
// });

Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*');

Route::get('{any}', function () {
    return view('index');
})->where('any', '.*');
