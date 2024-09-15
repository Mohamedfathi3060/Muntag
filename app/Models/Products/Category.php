<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['category_id','parent_category_id','category_name'];

    public function products():HasMany
    {
        return $this->hasMany(Product::class);
    }
    public function attributes():HasMany
    {
        return $this->hasMany(Category_Attribute::class,'category_id','category_id');
    }
}
