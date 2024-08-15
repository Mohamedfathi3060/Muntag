<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Products\Product;
use Illuminate\Http\Request;

class productsController extends Controller
{
    public function list()
    {
        // ->all()
        //  return body with Query param
        $per_page = request('per_page') ?? 15;
        return Product::simplePaginate();
    }
}
