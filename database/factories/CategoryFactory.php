<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        $sentence = $this->faker->sentence();
        // return [
            // $this->faker->name,
        // ];
//     protected $fillable = ['name', 'code', 'remark', 'owner', 'stock_count', 'create_time'];

        return [
            'name' => $this->faker->name,
            'code' => $this->faker->name,
            'remark' => $sentence,
            'user_id' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]),
            'stock_count' => $this->faker->randomElement([19, 29, 39, 49]),
            // 'create_time' => now(),
        ];
    }
}
