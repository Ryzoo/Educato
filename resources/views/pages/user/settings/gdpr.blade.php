@extends('layouts.default')

@section('meta-title', 'GDPR')
@section('meta-description', 'GDPR Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            deleteUser: '{{route('action.user.settings.gdpr.user-delete')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Rodo options']: '{{__('Rodo options')}}',
          ['Delete my account']: '{{__('Delete my account')}}',
        }
      }
    </script>
    <script src="{{mix('js/userSettingsGdprPage.js')}}"></script>
@endpush