<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Models\Stock;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\Api\CategoryRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;



class CategoriesController extends Controller
{
    public function index(CategoryRequest $request)
    {
        // return CategoryResource::collection(Category::all());

        //select a.id,a.name,a.remark,a.user_id,a.created_at , count(b.code)cnt from categories a ,stocks b where b.category_id=a.id group by a.id,a.name,a.remark,a.user_id,a.created_at limit 5 ;

        $cate = DB::table('categories')
        ->select(array('categories.id','categories.name','categories.remark','categories.user_id','categories.created_at' , DB::raw('COUNT(stocks.id) as stock_count')))
        ->leftJoin('stocks', 'stocks.category_id', '=', 'categories.id')
        ->groupBy('categories.id','categories.name','categories.remark','categories.user_id','categories.created_at')
        ->orderBy('categories.created_at', 'desc')
        ->paginate($request->pageSize);

        // $all = Category::paginate($request->pageSize);
        return parent::dataWithPage($cate);

    }

    public function getStocksByCategoryId(CategoryRequest $request)
    {
        $cateId = $request->id;

        $stockCodes = DB::table('stocks')
        ->select(array('code' ))->where('category_id', '=', $cateId)->get();

        return parent::success($stockCodes);

    }

    public function batchSaveStock( $request,$codeArray ,$category_id){

        // Log::debug('An informational message.-----',$codeArray);
        for ($i = 0; $i < count($codeArray); ++$i) {

            $stock = new Stock;

            $stock->remark = 'by category';
            $stock->price_id = 0;
            $stock->code = $codeArray[$i];
            $stock->market = 1;
            if(strlen($codeArray[$i])==4){
                $stock->market = 2;
            }
            //Log::debug('An informational message.-----',$codeArray[$i]);
            $stock->pattern = '0';
            $stock->day = now();
            $stock->category_id=$category_id;
            $stock->user_id = $request->user()->id;
            $stock->save();
        }
    }
    public function store(CategoryRequest $request, Category $category)
    {
        $id = $request->id;
        $codeArray = explode(',', $request->stocks);
        if(empty($id)){
            $category->fill($request->all());
            $category->user_id = $request->user()->id;
            $category->save();

            $this->batchSaveStock($request, $codeArray, $category->id);
        }else{
            $name = $request->name;
            $remark = $request->remark;
            Category::where('id', $id)->update(['name' => $name,'remark'=>$remark]);
            $deleted = DB::table('stocks')->where('category_id', $id)->delete();

            $this->batchSaveStock($request, $codeArray, $id);
        }
        return parent::success($category);
        //return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $this->authorize('update', $category);

        $category->update($request->all());
        return new CategoryResource($category);
    }
    public function destroy(CategoryRequest $request, Category $category)
    {
        // $this->authorize('destroy', $category);
        // ->whereIn('id', [1, 2, 3])

        $ids=$request->ids;
        $idsArray = explode(',',$ids);
        $deleted = DB::table('stocks')->whereIn('category_id', idsArray)->delete();

        Categories::destroy($idsArray);

        // $deleted = DB::table('categories')->whereIn('id', idsArray)->delete();

        return parent::success(null);
        // return response(null, 204);
    }
    public function delCate(CategoryRequest $request, Category $category)
    {
        // $this->authorize('destroy', $category);
        // ->whereIn('id', [1, 2, 3])

        $ids=$request->ids;
        Log::debug("ids========".$ids);
        $idsArray = explode(',',$ids);
        $deleted = DB::table('stocks')->whereIn('category_id', $idsArray)->delete();

        Category::destroy($idsArray);

        // $deleted = DB::table('categories')->whereIn('id', idsArray)->delete();

        return parent::success(null);
        // return response(null, 204);
    }
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }
}
