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
        Schema::create('item_item_value', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id')
                ->constrained(table: 'products_items',column: 'product_item_id');
            $table->foreignId('item_value_id')
                ->constrained(table: 'category_attribute_values',column: 'category_attribute_value_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_item_value');
    }
};
