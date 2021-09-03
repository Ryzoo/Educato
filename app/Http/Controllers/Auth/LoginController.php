<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	private AuthService $authService;

	public function __construct(AuthService $authService){
		$this->authService = $authService;
	}

	public function getLoginPage()
	{
		return view('pages.auth.login');
	}

	public function logoutUser()
	{
		Auth::logout();

		return redirect()
			->route('pages.main')
			->with('status', __('You are logout successfully!'));
	}

	public function loginUser(LoginRequest $request)
	{
		$credentials = $request->only('email', 'password');
		$isRemember = $request->has('remember') && boolval($request->get('remember'));

		if (Auth::attempt($credentials, $isRemember)) {
			return redirect()
				->route('pages.search')
				->with('status', __('You are logged successfully!'));
		}

		return redirect()
			->route('login')
			->with('error', __('Email or password not match! Try again.'));
	}
}
