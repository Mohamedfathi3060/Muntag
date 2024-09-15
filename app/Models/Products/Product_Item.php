<?php

namespace App\Models\Products;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product_Item extends Model
{
    use HasFactory;
    protected $primaryKey = "product_item_id";
    public $autoincrement = true;

    protected $table   = 'products_items';
    protected $fillable = ['product_id', 'SKU', 'quantity', 'image', 'price', 'discount'];

    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class,'product_id');
    }
    // when it is many to many
    // each model has "belongsToMany relation"
    public function values()
    {
        return $this->belongsToMany(Category_Attribute_Value::class,'item_item_value','item_id','item_value_id')
            ->withTimestamps();
    }
    public function carts()
    {
        return $this
            ->belongsToMany(
                Cart::class,
                'cart_item',
                'product_item_id',
                'cart_id',
            )
            ->withTimestamps();
    }

}
