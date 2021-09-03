<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class LanguageTest extends TestCase
{
	use WithFaker;
	use RefreshDatabase;

	public function test_whenPromptChangeLangToPl_langChanged()
	{
		$routeUrl = route('language', ["code" => "pl"]);

		$response = $this->get($routeUrl);

		$response->isRedirection();
		$response->assertSessionHas('status','Język zmieniony pomyślnie!');
		$response->assertSessionDoesntHaveErrors();
	}

	public function test_whenPromptChangeLangToEn_langChanged()
	{
		$routeUrl = route('language', ["code" => "en"]);

		$response = $this->get($routeUrl);

		$response->isRedirection();
		$response->assertSessionHas('status','Language changed successfully!');
		$response->assertSessionDoesntHaveErrors();
	}
}
