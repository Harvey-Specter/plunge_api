<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\Api\UserRequest;
use Illuminate\Auth\AuthenticationException;

class UsersController extends Controller
{
    public function store(UserRequest $request)
    {
    //    $verifyData = \Cache::get($request->verification_key);

    //    if (!$verifyData) {
    //        abort(403, '验证码已失效');
    //     }

    //     if (!hash_equals($verifyData['code'], $request->verification_code)) {
    //         // 返回401
    //         throw new AuthenticationException('验证码错误');
    //     }
        $name=explode('@',$request->email)[0];

        $user = User::create([
            'name' => $name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $cate = Category::create([
            'name' => $name."'FirstBlock",
            'remark' => 'MyFirstBlock is created by system at register',
            'user_id' => $user->id
        ]);
        // 清除验证码缓存
        // \Cache::forget($request->verification_key);

        return parent::success((new UserResource($user))->showSensitiveFields());
    }
    public function show(User $user, Request $request)
    {
        return new UserResource($user);
    }

    public function me(Request $request)
    {
        
        
        return parent::success((new UserResource($request->user()))->showSensitiveFields());
    }
}