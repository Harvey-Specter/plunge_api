@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">

      <div class="card-header">
        <h1>
          Category /
          @if($category->id)
            Edit #{{ $category->id }}
          @else
            Create
          @endif
        </h1>
      </div>

      <div class="card-body">
        @if($category->id)
          <form action="{{ route('categories.update', $category->id) }}" method="POST" accept-charset="UTF-8">
          <input type="hidden" name="_method" value="PUT">
        @else
          <form action="{{ route('categories.store') }}" method="POST" accept-charset="UTF-8">
        @endif

          @include('common.error')

          <input type="hidden" name="_token" value="{{ csrf_token() }}">

          
                <div class="mb-3">
                	<label for="name-field">Name</label>
                	<input class="form-control" type="text" name="name" id="name-field" value="{{ old('name', $category->name ) }}" />
                </div> 
                <div class="mb-3">
                	<label for="code-field">Code</label>
                	<input class="form-control" type="text" name="code" id="code-field" value="{{ old('code', $category->code ) }}" />
                </div> 
                <div class="mb-3">
                	<label for="remark-field">Remark</label>
                	<input class="form-control" type="text" name="remark" id="remark-field" value="{{ old('remark', $category->remark ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="owner-field">Owner</label>
                    <input class="form-control" type="text" name="owner" id="owner-field" value="{{ old('owner', $category->owner ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="stock_count-field">Stock_count</label>
                    <input class="form-control" type="text" name="stock_count" id="stock_count-field" value="{{ old('stock_count', $category->stock_count ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="create_time-field">Create_time</label>
                    <input class="form-control" type="text" name="create_time" id="create_time-field" value="{{ old('create_time', $category->create_time ) }}" />
                </div>

          <div class="well well-sm">
            <button type="submit" class="btn btn-primary">Save</button>
            <a class="btn btn-link float-xs-right" href="{{ route('categories.index') }}"> <- Back</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

@endsection
