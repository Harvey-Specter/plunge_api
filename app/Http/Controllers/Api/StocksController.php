<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Stock;
use App\Models\Category;

use App\Http\Resources\StockResource;
use App\Http\Requests\Api\StockRequest;

class StocksController extends Controller
{
    public function store(StockRequest $request,Category $category, Stock $stock)
    {
        $stock->remark = $request->remark;
        $stock->price_id = $request->price_id;
        $stock->code = $request->code;
        $stock->pattern = $request->pattern;
        $stock->market = $request->market;
        $stock->day = $request->day;

        $stock->category()->associate($category);
        $stock->user()->associate($request->user());
        $stock->save();

        return new StockResource($stock);
    }
}

// $table->Integer('price_id')->unsigned();
//             $table->date('day')->index();
//             $table->string('code')->index();
//             $table->Integer('owner')->unsigned();
//             $table->integer('category_id')->unsigned();
//             $table->integer('pattern')->unsigned()->default(0);
//             $table->string('market');
//             $table->string('remark')->nullable ();
