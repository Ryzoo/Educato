<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
	private AuthService $authService;

	public function __construct(AuthService $authService){
		$this->authService = $authService;
	}

	public function redirectToProvider(string $provider)
	{
		return Socialite::driver($provider)->redirect();
	}

	public function handleProviderCallback(string $provider)
	{
		$user = Socialite::driver($provider)->user();
		$this->authService->loginUserBySocial($user->getName(), $user->getEmail());

		return redirect()
			->route('pages.search')
			->with('status', __('You are logged successfully!'));
	}
}
