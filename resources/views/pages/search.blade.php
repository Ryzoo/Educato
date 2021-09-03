@extends('layouts.default')

@section('meta-title', 'Search')
@section('meta-description', 'Search Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/searchPage.js')}}"></script>
@endpush