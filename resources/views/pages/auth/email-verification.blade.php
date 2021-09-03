@extends('layouts.default')

@section('meta-title', 'Email not verified page')
@section('meta-description', 'Email not verified page Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        t: {
          ...window.serverData.t,
          ['Back to main page.']: '{{__('Back to main page.')}}',
        }
      }
    </script>
    <script src="{{mix('js/emailNotVerifiedPage.js')}}"></script>
@endpush