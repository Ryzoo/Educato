<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\SendResetPasswordLinkRequest;
use App\Services\AuthService;

class PasswordResetController extends Controller
{
	private AuthService $authService;

	public function __construct(AuthService $authService){
		$this->authService = $authService;
	}

	public function getForgotPasswordPage() {
		return view('pages.auth.forgot-password');
	}

	public function getResetPasswordPage($token) {
		return view('pages.auth.reset-password', ['token' => $token]);
	}

	public function sendResetPasswordLinkToUser(SendResetPasswordLinkRequest $request) {
		$email = $request->get('email');
		$this->authService->sendResetLink($email);

		return redirect()
			->route('login')
			->with(['status' => __('Reset link was sent to your email address.')]);
	}

	public function resetUserPassword(ResetPasswordRequest $request) {
		$email = $request->get('email');
		$password = $request->get('password');
		$token = $request->get('token');
		$this->authService->resetUserPassword($email, $password, $token);

		return redirect()
			->route('login')
			->with(['status' => __('Your password was successfully changed! You can now login to system.')]);
	}
}
