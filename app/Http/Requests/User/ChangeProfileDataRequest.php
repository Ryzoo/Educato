<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ChangeProfileDataRequest extends FormRequest
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
		$user = Auth::user();
		return [
			'name' => 'required|string',
			'email' => "required|email|unique:users,email,{$user->id},id",
		];
	}

	public function attributes()
	{
		return [
			'name' => __('Name'),
			'email' => __('Email'),
		];
	}
}
