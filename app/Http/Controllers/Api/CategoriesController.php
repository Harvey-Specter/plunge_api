<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\Api\CategoryRequest;

class CategoriesController extends Controller
{
    public function index(CategoryRequest $request)
    {
        // return CategoryResource::collection(Category::all());

        //select a.id,a.name,a.remark,a.user_id,a.created_at , count(b.code)cnt from categories a ,stocks b where b.category_id=a.id group by a.id,a.name,a.remark,a.user_id,a.created_at limit 5 ;

        //     $query = DB::table('category_issue')
        // ->select(array('issues.*', DB::raw('COUNT(issue_subscriptions.issue_id) as followers')))
        // ->where('category_id', '=', 1)
        // ->join('issues', 'category_issue.issue_id', '=', 'issues.id')
        // ->left_join('issue_subscriptions', 'issues.id', '=', 'issue_subscriptions.issue_id')
        // ->group_by('issues.id')
        // ->order_by('followers', 'desc')
        // ->get();

        $all = Category::paginate($request->pageSize);
        return parent::dataWithPage($all);

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
