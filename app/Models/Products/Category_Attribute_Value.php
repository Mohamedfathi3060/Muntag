<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Category_Attribute_Value extends Model
{
    use HasFactory;
    protected $table = "category_attribute_values";
    protected $primaryKey = "category_attribute_value_id";
    public function items():BelongsTo
    {
        return $this->belongsToMany(Product_Item::class,'item_item_value','item_value_id','item_id')
            ->withTimestamps();
    }
    public function attribute(): BelongsTo
    {
        return $this->belongsTo(Category_Attribute::class,'category_attribute_id','category_attribute_id');
    }
}
