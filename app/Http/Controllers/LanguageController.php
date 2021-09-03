<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
	public function setLanguage(string $code)
	{
		Session::put('languageCode', $code);
		App::setLocale($code);

		return redirect()
			->back()
			->with('status', __('Language changed successfully!'));
    }
}
