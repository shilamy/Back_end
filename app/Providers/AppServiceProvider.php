<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */

    public function boot():void
    {
        //authenticated user globally with Inertia
        Inertia::share([
            'auth' => function(){
                return[
                    'user' => Auth::user(),
                ];
            },
        ]);

        Vite::prefetch(concurrency: 3);
    }
}
