<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
	{
		\App\Models\User::observe(\App\Observers\UserObserver::class);
		\App\Models\Stock::observe(\App\Observers\StockObserver::class);

        //
        JsonResource::withoutWrapping();
        if (env('APP_ENV') == 'production') {
            $url->forceScheme('https');
        }
    }
}
