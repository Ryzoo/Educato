<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;

class RegisterController extends Controller
{
	private AuthService $authService;

	public function __construct(AuthService $authService){
		$this->authService = $authService;
	}

	public function getRegisterPage()
	{
		return view('pages.auth.register');
	}

	public function registerNewUser(RegisterRequest $request)
	{
		$name = $request->get('name');
		$email = $request->get('email');
		$password = $request->get('password');
		$this->authService->registerUser($name, $email, $password);

		return redirect()
			->route('pages.search')
			->with('status', __('Your new account created! Confirm your email first before you try to login.'));
	}
}
