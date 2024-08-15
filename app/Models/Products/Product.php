<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function items() : HasMany
    {
        return $this->hasMany(Product_Item::class);
    }
}
