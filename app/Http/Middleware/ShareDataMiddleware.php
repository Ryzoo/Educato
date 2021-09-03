<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class ShareDataMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
		View::share('sharedData', [
			"language" => App::getLocale(),
			"auth" => [
				"isLogged" => Auth::check(),
				"isVerified" => Auth::user() ?  Auth::user()->hasVerifiedEmail() : false,
				"user" => Auth::user(),
			]
		]);

        return $next($request);
    }
}
