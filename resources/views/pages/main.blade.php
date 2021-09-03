@extends('layouts.default')

@section('meta-title', 'About')
@section('meta-description', 'About Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/mainPage.js')}}"></script>
@endpush