<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class PasswordResetNotification extends Notification implements ShouldQueue
{
    use Queueable;

	public string $token;

	public function __construct(string $token)
    {
		$this->token = $token;
	}

    public function via()
    {
        return ['mail'];
    }

    public function toMail()
    {
    	$resetPasswordUrl = $this->getResetPasswordUrl();

        return (new MailMessage)
                    ->line(__("You prompted for reset password. If it's not you, then ignore this email. Otherwise, click on button below."))
                    ->action(__('Go to reset password'), $resetPasswordUrl)
                    ->line(__('Thank you for using our application!'));
    }

    protected function getResetPasswordUrl(){
		return URL::temporarySignedRoute(
			'password.reset',
			Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
			['token' => $this->token]
		);
	}

    public function toArray()
    {
        return [
            //
        ];
    }
}
