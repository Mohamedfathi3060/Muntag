<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\productRequest;
use App\Models\Products\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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

        //  VERSION  1 WITH repeated BUG
//        if($request->get('sort_by') === 'discount'){
//            $minDiscountPerProduct = DB::table('products_items')
//                ->select('product_id', DB::raw('MAX(discount) as max_discount'))
//                ->groupBy('product_id');
//
//            $query->joinSub($minDiscountPerProduct, 'max_discounts', function($join) {
//                $join->on('products.product_id', '=', 'max_discounts.product_id');
//            });
//
//
//            $query->join('products_items',function ($join){
//                $join->on('products.product_id','=','products_items.product_id')
//                    ->on('products_items.discount', '=', 'max_discounts.max_discount');
//            })->select('products.*', 'products_items.*');
//        }
        // TODO
        //  remove img from products table as i will use default images always
        $query->join('products_items',function ($join){
            $join->on('products_items.product_id','=','products.product_id');
            $join->where('products_items.is_default','=', true);
        });

        // VERSION 2 with postgresql
        if($request->get('sort_by') === 'discount'){

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
        // return Product::simplePaginate(1000);
    }
    public function preparePagination($query)
    {
        $page = request('page');
        $per_page = request('per_page');
        if (request('page') == null  ||  request('page') > 100) {
            $page = 1;
        }
        if (request('per_page') == null  ||  request('per_page') > 100) {
            $per_page = 15;
        }
        // TODO
        //  use instead for faster performance
        $query->limit($per_page)->offset($per_page * ($page-1) );
    }
}
