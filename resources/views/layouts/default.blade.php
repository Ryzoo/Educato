<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--Meta data--}}
        <title>Educato | @yield('meta-title')</title>
        <meta name="description" content="@yield('meta-description')">
        <meta name="keywords" content="@yield('meta-keywords')">
        <link rel="icon" type="image/svg" href="/images/favicon.svg">
        @stack('css')
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>

    {{--Data from server for store--}}
    <script>
      (function() {
        var cssMain = document.createElement('link');
        cssMain.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css';
        cssMain.rel = 'stylesheet';
        cssMain.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(cssMain);
      })();
    </script>
    <script>
      (function() {
        var cssMain = document.createElement('link');
        cssMain.href = '{{mix('css/app.css')}}';
        cssMain.rel = 'stylesheet';
        cssMain.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(cssMain);
      })();
    </script>
    <script>
      const sharedData = @json($sharedData ?? '{}');

      window.serverData = {
        ...sharedData,
        additional: {},
        success: "{{ session('status') ?? '' }}",
        error: "{{ session('error') ?? '' }}",
        validationErrors: JSON.parse('{!! $errors ?? '' !!}'),
        csrfToken: '{{csrf_field()}}',
        old: @json(Session::getOldInput()),
        routes: {
          language: {
            pl: '{{route('language', ["code" => "pl"])}}',
            en: '{{route('language', ["code" => "en"])}}',
          },
          auth: {
            logout: '{{route('pages.auth.logout')}}',
            login: '{{route('login')}}',
            register: '{{route('pages.auth.register')}}',
            passwordRequest: '{{route('password.request')}}',
            passwordUpdate: '{{route('password.update')}}',
            forgotPassword: '{{route('password.email')}}',
          },
          user: {
            notifications: '{{route('pages.user.notifications')}}',
            settings: {
              data: '{{route('pages.user.settings.data')}}',
              password: '{{route('pages.user.settings.password')}}',
              gdpr: '{{route('pages.user.settings.gdpr')}}',
            }
          },
          verification: {
            send: '{{route('verification.send')}}'
          },
          main: '{{route('pages.main')}}',
          search: '{{route('pages.search')}}',
          current: '{{Request::url()}}',
        },
        t: {
          ['Warning']: '{{__('Warning')}}',
          ['Search']: '{{__('Search')}}',
          ['Logout']: '{{__('Logout')}}',
          ['Login']: '{{__('Login')}}',
          ['Join us']: '{{__('Join us')}}',
          ['For Company']: '{{__('For Company')}}',
          ['For Education']: '{{__('For Education')}}',
          ['Created by Educated team']: '{{__('Created by Educated team')}}',
          ['Notifications']: '{{__('Notifications')}}',
          ['Settings']: '{{__('Settings')}}',
          ['Already with us:']: '{{__('Already with us:')}}',
          ['RODO']: '{{__('RODO')}}',
          ['Are you sure?']: '{{__('Are you sure?')}}',
          ['User data']: '{{__('User data')}}',
          ['Change password']: '{{__('Change password')}}',
          ['Delete']: '{{__('Delete')}}',
          ['Cancel']: '{{__('Cancel')}}',
          ['Resend verification email.']: '{{__('Resend verification email.')}}',
          ['Your email are not verified. Please use button in email that was sent to you.']: '{{__('Your email are not verified. Please use button in email that was sent to you.')}}',
        },
      }
    </script>
    <script async defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" integrity="sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==" crossorigin="anonymous"></script>
    @stack('scripts')
</html>