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
        switch($this->method()) {
            case 'POST':
                return [
                    // 'name' => 'required|string',
                    // 'code' => 'required|string',
                ];
                break;
            case 'PATCH':
                return [
                    'name' => 'required|string',
                    'code' => 'required|string',
                ];
                break;
        }
        return [];
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
