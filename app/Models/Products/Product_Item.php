<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product_Item extends Model
{
    use HasFactory;
    public function category():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
    // when it is many to many
    // each model has "belongsToMany relation"
    public function values()
    {
        return $this->belongsToMany(Category_Attribute_Value::class,'item_values')
            ->withTimestamps();
    }

}
