<?php

namespace App\Http\Requests\Api;

class AuthorizationRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|string',
            'password' => 'required|alpha_dash|min:6',
        ];
    }
    public function authorize()
    {
        return true;
    }
}
