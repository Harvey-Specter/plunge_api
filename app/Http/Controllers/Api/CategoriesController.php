<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\Api\CategoryRequest;
use Illuminate\Support\Facades\DB;


class CategoriesController extends Controller
{
    public function index(CategoryRequest $request)
    {
        // return CategoryResource::collection(Category::all());

        //select a.id,a.name,a.remark,a.user_id,a.created_at , count(b.code)cnt from categories a ,stocks b where b.category_id=a.id group by a.id,a.name,a.remark,a.user_id,a.created_at limit 5 ;

        $cate = DB::table('categories')
        ->select(array('categories.id','categories.name','categories.remark','categories.user_id','categories.created_at' , DB::raw('COUNT(stocks.id) as stock_count')))
        // ->where('category_id', '=', 1)
        ->leftJoin('stocks', 'stocks.category_id', '=', 'categories.id')
        ->groupBy('categories.id','categories.name','categories.remark','categories.user_id','categories.created_at')
        ->orderBy('categories.created_at', 'desc')
        ->paginate($request->pageSize);

        // $all = Category::paginate($request->pageSize);
        return parent::dataWithPage($cate);

    }
    public function store(CategoryRequest $request, Category $category)
    {
        $category->fill($request->all());
        $category->user_id = $request->user()->id;
        $category->save();
        return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $this->authorize('update', $category);

        $category->update($request->all());
        return new CategoryResource($category);
    }
    public function destroy(Category $category)
    {
        $this->authorize('destroy', $category);

        $category->delete();

        return response(null, 204);
    }
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }
}
