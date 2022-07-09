@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">
      <div class="card-header">
        <h1>Category / Show #{{ $category->id }}</h1>
      </div>

      <div class="card-body">
        <div class="card-block bg-light">
          <div class="row">
            <div class="col-md-6">
              <a class="btn btn-link" href="{{ route('categories.index') }}"><- Back</a>
            </div>
            <div class="col-md-6">
              <a class="btn btn-sm btn-warning float-right mt-1" href="{{ route('categories.edit', $category->id) }}">
                Edit
              </a>
            </div>
          </div>
        </div>
        <br>

        <label>Name</label>
<p>
	{{ $category->name }}
</p> <label>Code</label>
<p>
	{{ $category->code }}
</p> <label>Remark</label>
<p>
	{{ $category->remark }}
</p> <label>Owner</label>
<p>
	{{ $category->owner }}
</p> <label>Stock_count</label>
<p>
	{{ $category->stock_count }}
</p> <label>Create_time</label>
<p>
	{{ $category->create_time }}
</p>
      </div>
    </div>
  </div>
</div>

@endsection
