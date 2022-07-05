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
Route::prefix('v1')->name('api.v1.')->group(function() {
    Route::get('version', function() {
        return 'this is version v1';
    })->name('version');

        // 用户注册
    Route::post('users', [UsersController::class, 'store'])->name('users.store');

});

Route::prefix('v2')->name('api.v2.')->group(function() {
    Route::get('version', function() {
        return 'this is version v2';
    })->name('version');
});
// 第三方登录
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('socials/{social_type}/authorizations', [AuthorizationsController::class, 'socialStore'])
//                     ->where('social_type', 'wechat')
//                     ->name('socials.authorizations.store');

// // 登录
// Route::post('authorizations', [AuthorizationsController::class, 'store'])->name('authorizations.store');

// // 刷新token
// Route::put('authorizations/current', [AuthorizationsController::class, 'update'])->name('authorizations.update');
// // 删除token
// Route::delete('authorizations/current', [AuthorizationsController::class, 'destroy'])->name('authorizations.destroy');

