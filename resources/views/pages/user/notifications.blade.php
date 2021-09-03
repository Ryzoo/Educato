@extends('layouts.default')

@section('meta-title', 'Notifications')
@section('meta-description', 'Notifications Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/userSettingsNotificationsPage.js')}}"></script>
@endpush