<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthorizationsController;
use App\Http\Controllers\Api\UsersController;

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
Route::prefix('v1')->name('api.v1.')->middleware('throttle:1,1')->group(function() {
    Route::get('version', function() {
        return 'this is version v1';
    })->name('version');

    Route::middleware('throttle:' . config('api.rate_limits.sign'))->group(function () {
        // 用户注册
        Route::post('users', [UsersController::class, 'store'])->name('users.store');
        // 登录
        Route::post('authorizations', [AuthorizationsController::class, 'store'])->name('authorizations.store');
    });

    Route::middleware('throttle:' . config('api.rate_limits.access'))
    ->group(function () {

    });
   
    Route::middleware('throttle:' . config('api.rate_limits.access'))->group(function () {

    });
    // 刷新token
    Route::put('authorizations/current', [AuthorizationsController::class, 'update'])->name('authorizations.update');
    // 删除token
    Route::delete('authorizations/current', [AuthorizationsController::class, 'destroy'])->name('authorizations.destroy');
});

Route::prefix('v2')->name('api.v2.')->group(function() {
    Route::get('version', function() {
        return 'this is version v2';
    })->name('version');
});

