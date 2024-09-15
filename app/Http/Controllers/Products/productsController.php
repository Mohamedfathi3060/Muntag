<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\productRequest;
use App\Models\Products\Product;
use Illuminate\Support\Facades\DB;

class productsController extends Controller
{
    // TODO
    //  NOTE
    //  Use query builder instead of eloquent
    //  as Eloquent create object for each incoming row
    //  which has a big overhead
    //  ->all()
    //  return body with Query param
    public function list(productRequest $request)
    {
        $query = DB::table('products');


        // pagination
        $this->preparePagination($query);


        // TODO
        //  remove img from products table as i will use default images always
        $query->join('products_items',function ($join){
            $join->on('products_items.product_id','=','products.product_id');
            $join->where('products_items.is_default','=', true);
        });

        // VERSION 2 with postgresql
        if($request->get('sort_by')){
            // sort by
            $query->orderBy(
                $request->input('sort_by','created_at')
                ,
                $request->input('order','asc')
            );
        }


//        $query->from("products_items");
//        $query->from("products");
        $query->select('products_items.*','products.*');



        return response()->json(
            [
                "data"=>$query->get()
            ],200);
    }
    public function preparePagination($query)
    {
        $page = request('page');
        $per_page = request('per_page');
        if (request('page') == null) {
            $page = 1;
        }
        if (request('per_page') == null ) {
            $per_page = 15;
        }
        // DONE
        // use instead for faster performance
        $skip = $per_page * ($page-1) ;
        $query->where('products.product_id','>',$skip);
        $query->limit($per_page);
    }

    public function show(int $productId)
    {
        // eager loading contain 2 queries
        // fetch product
        // fetch its items
        // bind them
        $product = Product::with('items.values','category.attributes')->findOrFail($productId);
//        $product = Product::with('items.values.attribute')->findOrFail($productId);

        return response()->json(
        [
            "data" => $product
        ],200);

//        $product = DB::table('products')
//            ->join('products_items', function ($join) use ($productId)  {
//                $join->on('products_items.product_id', '=', 'products.product_id')
//                ->where('products.product_id', '=', $productId);
//            })->get();
//
//
//        if (!$product){
//            return response()->json(
//                [
//                    "error"=>[
//                        "code" => 400,
//                        "message" => "Invalid Product Id"
//                    ]
//                ],400);
//        }
//
//
//
//        return response()->json(
//        [
//            "data"=>$product
//        ],200);
    }
}
