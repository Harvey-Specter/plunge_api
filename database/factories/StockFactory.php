<?php

namespace Database\Factories;

use App\Models\Stock;
use Illuminate\Database\Eloquent\Factories\Factory;

class StockFactory extends Factory
{
    protected $model = Stock::class;

    public function definition()
    {
        return [
            // $this->faker->name,
            'remark' => $this->faker->sentence(),
            'day' => $this->faker->date("Y-m-d", 'now'),
            'price_id' => rand(1, 1000),
            'code' => rand(600000, 605000),
            'user_id' => rand(1, 10),
            'category_id' => rand(1, 20),
            'pattern' => $this->faker->randomElement([1, 2, 3, 4]),
            'market' => $this->faker->randomElement([1, 2])
        ];
    }
}
//              $table->Integer('price_id')->unsigned();
//             $table->date('day')->index();
//             $table->string('code')->index();
//             $table->Integer('owner')->unsigned();
//             $table->integer('category_id')->unsigned();
//             $table->integer('pattern')->unsigned()->default(0);
//             $table->string('market');
//             $table->string('remark')->nullable ();

// php artisan make:controller Api/StocksController
