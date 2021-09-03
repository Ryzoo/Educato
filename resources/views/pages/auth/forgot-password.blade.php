@extends('layouts.default')

@section('meta-title', 'Reset password')
@section('meta-description', 'Reset Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        t: {
          ...window.serverData.t,
          ['Email']: '{{__('Email')}}',
          ['Reset your password']: '{{__('Reset your password')}}',
          ['Reset password']: '{{__('Reset password')}}',
          ['I already have account']: '{{__('I already have account')}}',
          ['I dont have account yet.']: '{{__('I dont have account yet.')}}',
          ['Very much so, but you will learn about it only after you create your account.']: '{{__('Very much so, but you will learn about it only after you create your account.')}}',
          ['What does having an account in our platform give?']: '{{__('What does having an account in our platform give?')}}',
        }
      }
    </script>
    <script src="{{mix('js/authForgotPasswordPage.js')}}"></script>
@endpush