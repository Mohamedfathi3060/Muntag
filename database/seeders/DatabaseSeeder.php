<?php

namespace Database\Seeders;

use App\Models\Products\Product;
use App\Models\Products\Product_Item;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        DB::table('categories')->insert([
            "category_name"=>"Phones",
            "icon"=>'./Category-CellPhone.svg',
            'created_at'=>now(),
        ]);
        DB::table('categories')->insert([
            "category_name"=>"Computers",
            "icon"=>'./Category-Computer.svg',
            'created_at'=>now(),
        ]);
        DB::table('categories')->insert([
            "category_name"=>"SmartWatch",
            "icon"=>'./Category-SmartWatch.svg',
            'created_at'=>now(),
        ]);
        Product::factory(1000)->create();
        for ($i = 1; $i <= 10; $i++) {
            Product_Item::factory()->create([
                'product_id'=>$i,
                'is_default'=>true
            ]);
        }
    }
}
