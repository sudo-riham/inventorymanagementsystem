<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    function addProduct(Request $req){
        $product = new Product;
        $product->name = $req->input('name');
        $product->count = $req->input('count');
        $product->photo=$req->file('file')->store('products');
        $product->save();
        return $product;
    }

    function list()
    {
        return Product::all();
    }
    function delete($id){
        $result = Product::where('id', $id)->delete();
        if($result){
            return ["result" => "product has been deleted" ];
        }else{
            return ["result" => "operation has been failed" ];
        }
    }
    function search($key){
        return Product::where('name', 'Like', "%$key%")->get();
    }
}
