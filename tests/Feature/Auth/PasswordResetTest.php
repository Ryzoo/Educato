<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Notifications\Auth\PasswordResetNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;


class PasswordResetTest extends TestCase
{
	use WithFaker;
	use RefreshDatabase;

	public function test_userWhenForgotPwd_emailWasSend()
	{
		Notification::fake();
		Notification::assertNothingSent();

		$routeUrl = route('password.email');
		$email = $this->faker->email;
		$password = $this->faker->password(8);

		$user = User::factory()->create([
			'email' => $email,
			'password' => $password,
		]);

		$response = $this->post($routeUrl, [
			'email' => $email,
		]);

		$response->assertSessionDoesntHaveErrors();
		Notification::assertSentTo($user, PasswordResetNotification::class);
	}

	public function test_userWhenResetPwd_pwdWasChanged()
	{
		Notification::fake();
		Notification::assertNothingSent();

		$resetUrl = route('password.email');
		$searchUrl = route('pages.search');
		$loginUrl = route('login');
		$routeUrl = route('password.update');
		$email = $this->faker->email;
		$password = $this->faker->password(8);
		$token = '';

		$user = User::factory()->create([
			'email' => $email,
			'password' => $password,
		]);

		//Send reset email
		$response = $this->post($resetUrl, [
			'email' => $email,
		]);
		$response->assertSessionDoesntHaveErrors();
		Notification::assertSentTo($user, PasswordResetNotification::class,
			function($notification) use(&$token){
				$token = $notification->token;
				return Str::length($token) > 0;
			});

		//Change password
		$response = $this->post($routeUrl, [
			'email' => $email,
			'password' => $password,
			'password_confirmation' => $password,
			'token' => $token,
		]);
		$response->assertSessionDoesntHaveErrors();

		//Login using new password
		$response = $this->post($loginUrl, [
			'email' => $email,
			'password' => $password,
		]);

		$response->isRedirect($searchUrl);
		$response->assertSessionDoesntHaveErrors();
	}
}
