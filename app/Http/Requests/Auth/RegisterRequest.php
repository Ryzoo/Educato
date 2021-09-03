<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
			'name' => 'required|string',
			'email' => 'required|email|unique:users',
			'password' => 'required|string|min:8|confirmed',
			'regulation_accept' => 'required|accepted',
			'rodo_accept' => 'required|accepted',
        ];
    }

	public function attributes()
	{
		return [
			'name' => __('Name'),
			'email' => __('Email'),
			'password' => __('Password'),
			'rodo_accept' => __('RODO'),
			'regulation_accept' => __('Agreement'),
		];
	}
}
