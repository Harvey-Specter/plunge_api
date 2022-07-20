<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as BaseController;

class Controller extends BaseController
{
    public function dataWithPage($data){
        return response()->json([
            'code'=> '0000',
            'data'=>[
            'list'=> $data->items(),
            'total' => $data->total()]
        ]);
    }

    public function success($data){
        return response()->json([
            'code'=> '0000',
            'msg' => '操作成功',
            'data'=>$data
        ]);
    }
    // public function dataWithPage($data){
    //     return [
    //         'code'=> '0000',
    //         'data'=>[
    //         'list'=> $data->items(),
    //         'total' => $data->total()]
    //     ];
    // }
}
