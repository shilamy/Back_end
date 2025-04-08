<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        // If not authenticated, redirect to login
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Please login first');
        }

        // If not admin (role_as !== 1), redirect home with error
        if (Auth::user()->role_as !== 1) {
            return redirect('/')->with('error', 'Access Denied. Administrator privileges required.');
        }

        return $next($request);
    }
}