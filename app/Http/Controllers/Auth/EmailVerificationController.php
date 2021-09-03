<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Notifications\Auth\EmailVerificationNotification;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class EmailVerificationController extends Controller
{
	public function getNotificationPage()
	{
		return view('pages.auth.email-verification');
	}

    public function getVerificationPage(EmailVerificationRequest $request) {
		$request->fulfill();

		return redirect()
			->route('pages.search')
			->with('status', __('Your email are verified now!'));
	}

	public function resendVerificationEmail (Request $request) {
		$request->user()->notify((new EmailVerificationNotification())->locale(App::getLocale()));

		return back()
			->with('status', __('Verification link send to your email!'));
	}
}
