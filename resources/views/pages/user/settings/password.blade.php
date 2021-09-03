@extends('layouts.default')

@section('meta-title', 'Password change')
@section('meta-description', 'Password change Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            changePassword: '{{route('action.user.settings.password.change')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Current password']: '{{__('Current password')}}',
          ['New password']: '{{__('New password')}}',
          ['Confirm new password']: '{{__('Confirm new password')}}',
          ['Change my profile data']: '{{__('Change my profile data')}}',
          ['Go to GDPR options']: '{{__('Go to GDPR options')}}',
        }
      }
    </script>
    <script src="{{mix('js/userSettingsPasswordChangePage.js')}}"></script>
@endpush