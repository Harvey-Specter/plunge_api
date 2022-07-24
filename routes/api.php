<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthorizationsController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\StocksController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('v1')->name('api.v1.')->middleware('throttle:1000,1')->group(function() {
    Route::get('version', function() {
        return 'this is version v1';
    })->name('version');

    Route::middleware('throttle:' . config('api.rate_limits.sign'))->group(function () {
        // 用户注册
        Route::post('users', [UsersController::class, 'store'])->name('users.store');
        // 登录
        Route::post('authorizations', [AuthorizationsController::class, 'store'])->name('authorizations.store');

    });

    Route::middleware('throttle:' . config('api.rate_limits.access'))->group(function () {

         // 游客可以访问的接口
        // 某个用户的详情

        // Route::get('users/{user}', 'UsersController@show')->name('users.show');
        Route::get('users/{user}', [UsersController::class, 'show'])->name('users.show');

        // 登录后可以访问的接口
        Route::middleware('auth:api')->group(function() {
            // 当前登录用户信息
            Route::get('user', [UsersController::class, 'me'])->name('user.show');
            // 刷新token
            Route::put('authorizations/current', [AuthorizationsController::class, 'update'])->name('authorizations.update');
            // 删除token
            Route::delete('authorizations/current', [AuthorizationsController::class, 'destroy'])->name('authorizations.destroy');

             //getStocksByCategoryId
            Route::get('categories/getStocksByCategoryId', [CategoriesController::class, 'getStocksByCategoryId'])->name('categories.getStocksByCategoryId');
            Route::post('categories/delCate', [CategoriesController::class, 'delCate'])->name('categories.delCate');


            // 分类列表
            Route::apiResource('categories', CategoriesController::class)->only(['index','show']);

            Route::apiResource('categories', CategoriesController::class)->only(['store', 'update', 'destroy']);
            // 发布, 删除股票
            Route::apiResource('categories.stocks', StocksController::class)->only([
                'store', 'destroy'
            ]);



            // 股票列表
            Route::apiResource('categories.stocks', StocksController::class)->only([
                'index',
            ]);
        });

    });

});

Route::prefix('v2')->name('api.v2.')->group(function() {
    Route::get('version', function() {
        return 'this is version v2';
    })->name('version');
});

