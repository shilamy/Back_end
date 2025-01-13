<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
     // Global Middleware
     $middleware->append(HandleInertiaRequests::class);
     $middleware->append(\Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class);
     $middleware->append(\App\Http\Middleware\EnsureUserIsAdmin::class);

       })
    ->withExceptions(function (Exceptions $exceptions) {
    })->create();
