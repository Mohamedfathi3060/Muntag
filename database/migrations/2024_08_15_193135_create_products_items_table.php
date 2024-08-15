<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products_items', function (Blueprint $table) {
            $table->id('product_item_id');
            $table->foreignId('product_id')
                ->constrained(table: 'products',column: 'product_id');
            $table->string('SKU');
            $table->unsignedInteger('quantity');
            $table->string('image');
            $table->unsignedInteger('price');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_items');
    }
};
