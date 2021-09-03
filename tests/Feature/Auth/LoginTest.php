<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class LoginTest extends TestCase
{
	use WithFaker;
	use RefreshDatabase;

	public function test_userWithValidData_canLogin()
	{
		$routeUrl = route('login');
		$searchUrl = route('pages.search');
		$email = $this->faker->email;
		$password = $this->faker->password(8);

		User::factory()->create([
			'email' => $email,
			'password' => $password,
		]);

		$response = $this->post($routeUrl, [
			'email' => $email,
			'password' => $password,
		]);

		$response->isRedirect($searchUrl);
		$response->assertSessionDoesntHaveErrors();
	}

	public function test_userWithInvalidPassword_cantLogin()
	{
		$routeUrl = route('login');
		$email = $this->faker->email;
		$password = $this->faker->password(8);

		User::factory()->create([
			'email' => $email,
			'password' => $password,
		]);

		$response = $this->post($routeUrl, [
			'email' => $email,
			'password' => 'wrong pwd 12345',
		]);

		$response->isRedirect($routeUrl);
		$response->assertSessionDoesntHaveErrors();
		$response->assertSessionHas('error', 'Email or password not match! Try again.');
	}
}
