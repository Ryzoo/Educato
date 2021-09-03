@extends('layouts.default')

@section('meta-title', 'Login')
@section('meta-description', 'Login Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            login: '{{route('login')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Email']: '{{__('Email')}}',
          ['Password']: '{{__('Password')}}',
          ['Login to system']: '{{__('Login to system')}}',
          ['Remember me']: '{{__('Remember me')}}',
          ['Login']: '{{__('Login')}}',
          ['I forgot my password.']: '{{__('I forgot my password.')}}',
          ['I dont have account yet.']: '{{__('I dont have account yet.')}}',
          ['Very much so, but you will learn about it only after you create your account.']: '{{__('Very much so, but you will learn about it only after you create your account.')}}',
          ['What does having an account in our platform give?']: '{{__('What does having an account in our platform give?')}}',
        }
      }
    </script>
    <script src="{{mix('js/authLoginPage.js')}}"></script>
@endpush