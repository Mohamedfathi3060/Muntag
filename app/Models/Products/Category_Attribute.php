<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category_Attribute extends Model
{
    use HasFactory;
    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function values():HasMany
    {
        return $this->hasMany(Category_Attribute_Value::class);
    }
}
