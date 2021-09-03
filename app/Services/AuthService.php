<?php


namespace App\Services;


use App\Models\Auth\PasswordReset;
use App\Models\User;
use App\Notifications\Auth\EmailVerificationNotification;
use App\Notifications\Auth\PasswordResetNotification;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthService
{
	public function loginUserBySocial(string $name, string $email)
	{
		$user = User::where('email', $email)->first();

		if(isset($user)) Auth::login($user);
		else $this->registerUser($name, $email, Str::random(16), true);
	}

	public function registerUser(string $name, string $email, string $password, bool $isVerified = false){
		$user = User::create([
			'name' => $name,
			'email' => $email,
			'password' => Hash::make($password),
		]);

		Auth::login($user);

		if(!$isVerified) $user->notify((new EmailVerificationNotification())->locale(App::getLocale()));
		else $user->forceFill([
				'email_verified_at' => Date::now()
			])->save();
	}

	public function sendResetLink(string $email)
	{
		PasswordReset::where('email', $email)->delete();
		$user = User::where('email', $email)->first();
		$token = Str::random(60);

		PasswordReset::create([
			'email' => $email,
			'token' => $token,
		]);

		$user->notify((new PasswordResetNotification($token))->locale(App::getLocale()));
	}

	public function resetUserPassword(string $email, string $password, string $token)
	{
		$pwdPrompt = PasswordReset::where('email', $email)->first();

		if(!isset($pwdPrompt) || $pwdPrompt->token !== $token){
			redirect()
				->route('password.request')
				->with('error', __('Email and token not match! Try reset password again.'))
				->send();
		}

		$user = User::where('email', $email)->first();
		$user->forceFill([
				'password' => Hash::make($password)
			])
			->save();

		$user->setRememberToken(Str::random(60));
		PasswordReset::where('email', $email)->delete();
	}
}