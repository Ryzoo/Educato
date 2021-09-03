@extends('layouts.default')

@section('meta-title', 'User data')
@section('meta-description', 'User data Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            dataChange: '{{route('action.user.settings.data.change')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Change profile data']: '{{__('Change profile data')}}',
          ['Email']: '{{__('Email')}}',
          ['Name']: '{{__('Name')}}',
          ['Save changes']: '{{__('Save changes')}}',
          ['Change my password']: '{{__('Change my password')}}',
          ['Go to GDPR options']: '{{__('Go to GDPR options')}}',
        }
      }
    </script>
    <script src="{{mix('js/userSettingsUserDataPage.js')}}"></script>
@endpush