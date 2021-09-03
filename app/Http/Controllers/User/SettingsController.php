<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\ChangeProfileDataRequest;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
	public function getGDPRPage()
	{
		return view('pages.user.settings.gdpr');
    }

	public function getPasswordChangePage()
	{
		return view('pages.user.settings.password');
	}

	public function getUserDataPage()
	{
		return view('pages.user.settings.data');
	}

	public function changeProfileData(ChangeProfileDataRequest $request)
	{
		$user = Auth::user();
		$newName = $request->get('name');
		$newEmail = $request->get('email');

		if($user->name !== $newName)
			$user->changeName($newName);
		if($user->email !== $newEmail)
			$user->changeEmail($newEmail);

		return back()
			->with('success', __('Your profile data changed successfully!'));
	}

	public function changePassword(ChangePasswordRequest $request)
	{
		$oldPassword = $request->get('old_password');
		$newPassword = $request->get('new_password');

		Auth::user()->changePassword($oldPassword, $newPassword);

		return redirect()
			->route('login')
			->with('success', __('Your password changed successfully!'));
	}

	public function deleteUserAccount()
	{
		Auth::user()->deleteAccount();

		return redirect()
			->route('pages.main')
			->with('success', __('Your account deleted successfully!'));
	}
}
