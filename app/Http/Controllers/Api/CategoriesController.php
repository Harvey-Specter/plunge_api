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
        $name=trim($request->name);
        $userId = $request->userId;
        $nameWhere = ' ';
        if(!empty($name)){
            $nameWhere = " and categories.name like '%".$name."%' ";
        }
        if(!empty($userId)){
            $nameWhere = " and categories.user_id = ".$userId." ";
        }
        DB::connection()->enableQueryLog();

        $cate = DB::table('categories')
        ->select(array('users.name as user_name','categories.id','categories.name','categories.remark','categories.user_id','categories.created_at' , DB::raw('(SELECT COUNT(1) FROM stocks WHERE `categories`.`id` = `stocks`.`category_id` AND price_id<>2  ) AS stock_count ')))
        // ->leftJoin('stocks', 'stocks.category_id', '=', 'categories.id')
        // ->leftJoin('stocks',function ($join) {
        //     $join->on('stocks.category_id', '=', 'categories.id')
        //         ->where('stocks.price_id', '!=', 2);
        // })
        ->leftJoin('users' , 'categories.user_id','=','users.id')
        ->whereRaw('1=1'.$nameWhere )
        ->groupBy('categories.id','categories.name','categories.remark','categories.user_id','categories.created_at')
        ->orderBy('categories.id', 'desc')
        ->paginate($request->pageSize);

        

        // $all = Category::paginate($request->pageSize);
        return parent::dataWithPage($cate);
    }
    public function getAll(CategoryRequest $request)
    {
        $cate = DB::table('categories')
        ->select(array('categories.id as value','categories.name as label'))
        ->orderBy('categories.name')
        ->get();
        return parent::success($cate);
    }

    public function industryList(CategoryRequest $request)
    {
       Log::debug('industryList------------------1--------');

       $name=trim($request->cate33);
       $nameWhere = ' ';
       if(!empty($name)){
           $nameWhere = " and co_jp.cate33 like '%".$name."%' ";
       }

       $whereStr=" market not like 'ETF%' and market not like 'REIT%' and market not like '-%' and market not like '出資証券%' " . $nameWhere ;
       // DB::enableQueryLog();
       $industry = DB::table('co_jp')
       ->select(array('cate33', 'cate33_code'))
       ->selectRaw("COUNT(1) as cnt, SUM(IF(size LIKE 'TOPIX Large70%',1,0))l70,SUM(IF(size LIKE 'TOPIX Core30%',1,0))c30,SUM(IF(size LIKE 'TOPIX Mid400%',1,0))m400,SUM(IF(size LIKE 'TOPIX Small 1%',1,0))s1,SUM(IF(size LIKE 'TOPIX Small 2%',1,0))s2,SUM(IF(size LIKE '-%',1,0))other")
    //    ->where('market', 'not like', "ETF%")
    //    ->where('market', 'not like', "REIT%")
    //    ->where('market', 'not like', "-%")
    //    ->where('market', 'not like', "出資証券%")
       ->whereRaw( $whereStr )
       ->groupBy('cate33','cate33_code')
       ->orderByDesc('cnt')
       ->paginate($request->pageSize);

       //$logs = DB::getQueryLog();
       //print_r($logs);

        return parent::dataWithPage($industry);
    }

    public function getStocksByCategoryId(CategoryRequest $request)
    {
        $cateId = $request->id;

        $stockCodes = DB::table('stocks')
        ->select(array('code' ))->where('category_id', '=', $cateId)->get();

        return parent::success($stockCodes);

    }

    public function getAnalyzeByCategoryId(CategoryRequest $request)
    {
        $cateId = $request->id;
        $where = array('stocks.category_id' => $cateId);

        $ind = DB::table('stocks')
        ->select(array('co_jp.cate33 as name', DB::raw('COUNT(1) as value')))
        ->Join('co_jp', 'stocks.code', '=', 'co_jp.code')
        ->where($where)
        ->groupBy('co_jp.cate33')->get();;

        $size = DB::table('stocks')
        ->select(array('co_jp.size as name', DB::raw('COUNT(1) as value')))
        ->Join('co_jp', 'stocks.code', '=', 'co_jp.code')
        ->where($where)
        ->groupBy('co_jp.size')->get();

        $data=['ind'=>$ind,'size'=>$size];

        return parent::success($data);

    }

    public function getCatesByUserId(CategoryRequest $request)
    {
        $userId = $request->userId;

        $cates = DB::table('categories')
        ->select(array('id as value','name as label' ))->where('user_id', '=', $userId)->get();

        return parent::success($cates);

    }

    public function getCatesByUserIdCode(CategoryRequest $request)
    {
        $userId = $request->userId;
        $code = $request->code;

        $where = array('categories.user_id' => $userId, 'stocks.code'=>$code);
        $cates = DB::table('categories')
        ->select(array('categories.id as value','categories.name as label', 'stocks.id'))
        ->Join('stocks', 'stocks.category_id', '=', 'categories.id')
        ->where($where)
        ->get();

        return parent::success($cates);
    }

    //DB::insert('insert into test (id, name, email, password) values (?, ?, ? , ? )',[1, 'Laravel','laravel@test.com','Laravel']);
    //INSERT INTO crm_promotion_orders(PROMOTIONORDERS_ID,PHONE,ORDER_ID)
	// select tb.CUSTOMER_UUID, tb.CUSTOMER_MOBILE,tb.PROJECT_ID from(SELECT ccm.CUSTOMER_UUID,ccm.CUSTOMER_MOBILE,ccm.PROJECT_ID FROM crm_customer_manage ccm
	// where ccm.PROJECT_ID = '1429006975654264834' and ccm.CUSTOMER_MOBILE = '13773262930') AS tb

    public function clone(CategoryRequest $request ,Category $category){

        $category->fill($request->all());
        $category->user_id = $request->user()->id;
        $category->name = $request->name.'_COPY';
        $category->save();

        $rs=DB::insert('insert into stocks (price_id, day, code, user_id,category_id,pattern,market,remark,created_at) select price_id,day,code,'.$request->user()->id.','.$category->id.', pattern,market,remark , created_at from stocks where category_id='.$request->id);

        return parent::success($rs);
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
