<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Models\Stock;
use App\Models\Category;

use App\Http\Resources\StockResource;
use App\Http\Requests\Api\StockRequest;
use App\Http\Queries\StockQuery;
use Illuminate\Support\Facades\Log;

class StocksController extends Controller
{
    // public function index(Category $category)
    public function index($category_id, StockQuery $query,StockRequest $request)
    {
        //$stocks = $category->stocks()->paginate();

        $stocks = $query->where('category_id', $category_id)->paginate($request->pageSize);
        $data =parent::dataWithPage($stocks);
        return $data;
    }

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
    public function destroy(Category $category, Stock $stock)
    {
        if ($stock->category_id != $category->id) {
            abort(404);
        }

        $this->authorize('destroy', $stock);
        $stock->delete();

        // return response(null, 204);
        return parent::success(204);
    }
    public function delStock(StockRequest $request, Stock $stock)
    {
        // $this->authorize('destroy', $stock);
        $ids=$request->ids;
        Log::debug("delStock========".$ids);
        $idsArray = explode(',',$ids);
        //$deleted = DB::table('stocks')->whereIn('id', $idsArray)->delete();
        Stock::destroy($idsArray);
        return parent::success(204);
    }
}
