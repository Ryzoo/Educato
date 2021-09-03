<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

	public function changePassword(string $oldPassword, string $newPassword)
	{
		if(!Auth::attempt([
			'email' => $this->email,
			'password' => $oldPassword
		])){
			back()
				->with('error', 'Your current password are invalid!')
				->send();
		}

		$this->forceFill([
			'password' => Hash::make($newPassword),
		])->save();
    }

	public function changeName(string $newName)
	{
		$this->forceFill([
			'name' => $newName,
		])->save();
	}

	public function changeEmail(string $newEmail)
	{
		$this->forceFill([
			'email' => $newEmail,
			'email_verified_at' => null,
		])->save();
	}

	public function deleteAccount()
	{
		try {
			$this->delete();
		} catch (\Exception $e) {
			back()
				->with('error', 'We cannot delete your account. Contact to system administrator.')
				->send();
		}
	}
}
