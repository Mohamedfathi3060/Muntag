<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Category_Attribute_Value extends Model
{
    use HasFactory;
    public function item():BelongsTo
    {
        return $this->belongsTo(Category_Attribute::class);
    }
}
