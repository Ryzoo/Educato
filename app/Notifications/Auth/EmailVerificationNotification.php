<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class EmailVerificationNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function via()
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
		$userName = $notifiable->name;
		$verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
					->greeting(__('Hi :userName', ['userName' => $userName]))
                    ->line(__('Thank you for register! To finish registration, click on button below.'))
                    ->action(__('Verify this email'), $verificationUrl)
                    ->line(__('Thank you for using our application!'));
    }

	/**
	 * Get the verification URL for the given notifiable.
	 *
	 * @param  mixed  $notifiable
	 * @return string
	 */
	public function verificationUrl($notifiable)
	{
		return URL::temporarySignedRoute(
			'verification.verify',
			Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
			[
				'id' => $notifiable->getKey(),
				'hash' => sha1($notifiable->getEmailForVerification()),
			]
		);
	}

    public function toArray()
    {
        return [
            //
        ];
    }
}
