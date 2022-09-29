<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        if ($status == 'true' && !auth()->user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'))->with([
                'message' => "You have to subscribe first",
                'type' => "success"
            ]);;
        }
        if ($status == 'false' && auth()->user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index')
        )->with([
            'message' => "You have subscribed, complete the time limit, then you can subscribe again",
            'type' => "success"
        ]);
        }
        return $next($request);
        
    }
}
