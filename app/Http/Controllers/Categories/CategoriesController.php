<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    public function list()
    {
        $categories = DB::table('categories')->get();

        foreach ($categories as $category) {
            if (isset($category->icon)) { // Assuming 'icon_url' is the column name
                $svgPath = public_path($category->icon); // Get the full path to the SVG file

                if (file_exists($svgPath)) {
                    $category->icon = file_get_contents($svgPath); // Add SVG content as text
                } else {
                    $category->icon = null; // Handle cases where the file doesn't exist
                }
            }
        }

        return response()->json(
            [
                "data" => $categories
            ],200);
    }
}
