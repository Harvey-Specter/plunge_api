<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Stock;

class StocksTableSeeder extends Seeder
{
    public function run()
    {
        Stock::factory()->count(500)->create();
    }
}

