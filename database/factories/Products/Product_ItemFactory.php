<?php

namespace Database\Factories\Products;

use App\Models\Products\Product_Item;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products\Product_Item>
 */
class Product_ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product_Item::class;
    public function definition(): array
    {
        return [
            'product_id' => $this->faker->numberBetween(1,10000) ,
            'SKU'=>$this->faker->title(),
            'quantity'=>$this->faker->numberBetween(0,30),
            'image'=>$this->faker->imageUrl('190','180'),
            'price'=>$this->faker->numberBetween(50,1500),
            'discount'=>$this->faker->numberBetween(0,70)/100,
            'sold'=>$this->faker->numberBetween(0,200)
        ];
    }
}
