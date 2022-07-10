<?php

namespace App\Http\Requests;

class CategoryRequest extends Request
{
    public function rules()
    {
        switch($this->method())
        {
            // CREATE
            case 'POST':
            // UPDATE
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name'       => 'required|min:2',
                    'code'        => 'required|min:2',
                    // 'category_id' => 'required|numeric',
                ];
            }
            case 'GET':
            case 'DELETE':
            default:
            {
                return [];
            };
        }
    }

    public function messages()
    {
        return [
            'name.min' => '标题必须至少两个字符',
            'code.min' => '文章内容必须至少两个字符',
        ];
    }
}
