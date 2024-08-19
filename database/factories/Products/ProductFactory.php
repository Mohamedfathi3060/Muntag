<?php

namespace Database\Factories\Products;

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => $this->faker->name,
            'description'=>$this->faker->realText,
            'product_image'=>$this->faker->imageUrl('190','180'),
            'category_id'=> 1,
        ];
    }
}
