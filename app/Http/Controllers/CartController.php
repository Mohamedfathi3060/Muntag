<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Products\Product_Item;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // used to add items to LoggedIn User Cart
    public function addProductItemToMyCart()
    {
        // TODO
        //   "IMP" Handle if item is already added before
        //   "May neglect" allow many items to be passed each has the quantity


        // extract user
        $user = auth()->user();
        // extract Product with its quantity
        request()->validate([
            'product_item_id'=>'required|integer',
            'quantity'=>'required|integer'
        ]);



        // here we check if this item exists in Inventory
        $item = Product_Item::where('product_item_id','=',request('product_item_id'))->first();

        if(!$item){
            dd('Item Not Found');
        }




        // if there is no Cart
        //   1- create Cart
        if(!$user->cart()->exists()){
            dump('No Cart, create new one');
            // Method 1
//            $cart = new Cart();
//            $user->cart()->save($cart);

            // method 2

            $user->cart()->create();


            // method 3
//            $cart = Cart::find(1);
//            $user->cart()->associate($cart);

        }


        $cart = $user->cart()->first();

        // here if($cart)

        // Then attach this product to this cart
        $cart->items()->attach($item,['quantity' => request('quantity') ?? 1]);
        // automatically using"attach/deAttach" Quantity defined or one "1" as default
    }
}
