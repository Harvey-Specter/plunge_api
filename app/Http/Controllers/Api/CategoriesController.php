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
