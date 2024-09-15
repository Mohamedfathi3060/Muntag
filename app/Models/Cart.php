<?php

namespace App\Models;

use App\Models\Products\Product_Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cart extends Model
{
    protected $fillable = ['user_id'];
    use HasFactory;
    public function user():BelongsTo
    {
         return $this->belongsTo(User::class, 'user_id');
    }
    public function items()
    {
        return $this
            ->belongsToMany(
                Product_Item::class,
                'cart_item',
                'cart_id',
                'product_item_id'
            )
            ->withTimestamps();
    }
}
