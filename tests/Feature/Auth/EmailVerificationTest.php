<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Notifications\Auth\EmailVerificationNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;


class EmailVerificationTest extends TestCase
{
	use WithFaker;
	use RefreshDatabase;

	public function test_userWhenUseLink_userEmailVerified()
	{
		Notification::fake();
		Notification::assertNothingSent();

		$emailConfirmationLink = '';
		$routeUrl = route('pages.auth.register');
		$searchUrl = route('pages.search');
		$name = $this->faker->name;
		$email = $this->faker->email;
		$password = $this->faker->password(8);
		$regulation = true;
		$rodo = true;

		$response = $this->post($routeUrl, [
			'name' => $name,
			'email' => $email,
			'password' => $password,
			'password_confirmation' => $password,
			'regulation_accept' => $regulation,
			'rodo_accept' => $rodo,
		]);

		$response->isRedirect($searchUrl);
		$response->assertSessionDoesntHaveErrors();

		$user = User::where('email', $email)->first();
		$this->assertNotNull($user);

		Notification::assertSentTo($user, EmailVerificationNotification::class,
			function($notification) use($user, &$emailConfirmationLink){
				$emailConfirmationLink = $notification->verificationUrl($user);
				return Str::length($emailConfirmationLink) > 0;
			});

		$response = $this->get($emailConfirmationLink);
		$response->isRedirect($searchUrl);
		$response->assertSessionDoesntHaveErrors();

		$user = User::where('email', $email)->first();
		$this->assertTrue($user->hasVerifiedEmail());
	}
}
