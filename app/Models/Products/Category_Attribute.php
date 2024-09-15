<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category_Attribute extends Model
{
    use HasFactory;
    protected $table = "category_attributes";
    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id','category_id');
    }
    public function values():HasMany
    {
        return $this->hasMany(Category_Attribute_Value::class);
    }
}
