<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected $table = "products";
    protected $primaryKey = "product_id";
    public $autoincrement = true;
    protected $fillable = ['category_id','product_image','description','product_name'];

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id','category_id');
    }
    public function items() : HasMany
    {
        return $this->hasMany(Product_Item::class,'product_id');
    }
}
