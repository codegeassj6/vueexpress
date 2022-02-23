<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div id="app" class="space-dev">
            <app-component></app-component>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
        {{-- <script src="/js/helper.js"></script> --}}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.14.6/rollbar.min.js"></script>

    </body>
</html>
