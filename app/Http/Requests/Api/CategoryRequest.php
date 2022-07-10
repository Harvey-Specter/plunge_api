<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class categoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string',
            'code' => 'required|string',
            // 'category_id' => 'required|exists:categories,id',
        ];
    }

    public function attributes()
    {
        return [
            'title' => '名字',
            'body' => '编码',
            // 'remark' => '备注',
        ];
    }
}
