<?php

use App\Http\Controllers\AuthController\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Products\productsController;
use App\Http\Controllers\Categories\CategoriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::get('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
    Route::post('/cart/items', [CartController::class,'addProductItemToMyCart'])->middleware('auth:api');
});

Route::get('/products',[productsController::class,'list']);
Route::get('/products/{id}',[productsController::class,'show']);
Route::get('/category',[CategoriesController::class,'list']);
