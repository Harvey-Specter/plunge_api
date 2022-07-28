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

    private function saveStockByReq(StockRequest $request , Stock $stock , $cateId)
    {
        $stock->price_id = $request->price_id;
        $stock->day = now();
        $stock->code = $request->code;
        $stock->user()->associate($request->user());
        //$stock->category_id->$request->category_id;
        $stock->category_id=$cateId;
        $stock->pattern = $request->pattern;
        $stock->market = $request->market;
        $stock->remark = $request->remark;
        // $stock->created_at=now();
        // $stock->updated_at=now();
        $stock->save();
    }
    public function store(StockRequest $request,Category $category, Stock $stock)
    {
        $id = $request->id;
        $category_ids = $request->category_ids;
        // $stock->created_at=now();
        // $stock->updated_at=now();
        $ac = 0;
        if(empty($id)){
            $this->saveStockByReq($request,$stock,$request->category_id);
            for($i = 0; $i < count($category_ids); $i++) {
                if($category_ids[$i] != $request->category_id){
                    $this->saveStockByReq($request,$stock,$category_ids[$i]);
                }
            }
        }else{
            $updateDatas=[];
            for($i = 0; $i < count($category_ids); $i++) {

                $row=[
                    'code' => $request->code,
                    'price_id' => $request->price_id,
                    'day' => $request->day,
                    'user_id' => $request->user_id,
                    'pattern' => $request->pattern,
                    'category_id' => $category_ids[$i],
                    'market' => $request->market,
                    'remark' => $request->remark,
                    // 'created_at' => now(),
                    // 'updated_at' => now(),
                ];
                array_push($updateDatas,$row);
            }
            $ac = Stock::upsert($updateDatas, ['category_id', 'code'], ['pattern','market','remark']);
        }
        return parent::success($ac);

        // Log::debug("storeStock========".$id,$category_ids);
        //

        //return new StockResource($stock);
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
