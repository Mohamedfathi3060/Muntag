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
        Schema::table('products_items', function (Blueprint $table) {
            $table->index('product_id','item_product_id_FK_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products_items', function (Blueprint $table) {
            $table->dropIndex('item_product_id_FK_idx');
        });
    }
};
