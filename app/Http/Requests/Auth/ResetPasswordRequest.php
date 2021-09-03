<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
			'token' => 'required|string|exists:password_resets',
			'email' => 'required|email|exists:password_resets',
			'password' => 'required|string|min:8|confirmed',
        ];
    }

	public function attributes()
	{
		return [
			'token' => __('Token'),
			'email' => __('Email'),
			'password' => __('Password'),
		];
	}
}
