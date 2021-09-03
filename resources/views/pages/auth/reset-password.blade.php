@extends('layouts.default')

@section('meta-title', 'Reset password')
@section('meta-description', 'Reset Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        additional: {
          ...window.serverData.additional,
          resetToken: '{{$token}}'
        },
        t: {
          ...window.serverData.t,
          ['Email']: '{{__('Email')}}',
          ['Password']: '{{__('Password')}}',
          ['Change your password']: '{{__('Change your password')}}',
          ['Change password']: '{{__('Change password')}}',
          ['Confirm password']: '{{__('Confirm password')}}',
          ['I already have account']: '{{__('I already have account')}}',
          ['I dont have account yet.']: '{{__('I dont have account yet.')}}',
          ['Very much so, but you will learn about it only after you create your account.']: '{{__('Very much so, but you will learn about it only after you create your account.')}}',
          ['What does having an account in our platform give?']: '{{__('What does having an account in our platform give?')}}',
        }
      }
    </script>
    <script src="{{mix('js/authResetPasswordPage.js')}}"></script>
@endpush