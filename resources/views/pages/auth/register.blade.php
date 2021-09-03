@extends('layouts.default')

@section('meta-title', 'Register')
@section('meta-description', 'Register Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            register: '{{route('pages.auth.register')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Create new account']: '{{__('Create new account')}}',
          ['Email']: '{{__('Email')}}',
          ['Password']: '{{__('Password')}}',
          ['Confirm password']: '{{__('Confirm password')}}',
          ['Agreement']: '{{__('Agreement')}}',
          ['I already have account']: '{{__('I already have account')}}',
          ['I accept the']: '{{__('I accept the')}}',
          ['Name']: '{{__('Name')}}',
          ['Very much so, but you will learn about it only after you create your account.']: '{{__('Very much so, but you will learn about it only after you create your account.')}}',
          ['What does having an account in our platform give?']: '{{__('What does having an account in our platform give?')}}',
        }
      }
    </script>
    <script src="{{mix('js/authRegisterPage.js')}}"></script>
@endpush