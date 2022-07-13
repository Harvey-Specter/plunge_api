@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">
      <div class="card-header">
        <h1>Stock / Show #{{ $stock->id }}</h1>
      </div>

      <div class="card-body">
        <div class="card-block bg-light">
          <div class="row">
            <div class="col-md-6">
              <a class="btn btn-link" href="{{ route('stocks.index') }}"><- Back</a>
            </div>
            <div class="col-md-6">
              <a class="btn btn-sm btn-warning float-right mt-1" href="{{ route('stocks.edit', $stock->id) }}">
                Edit
              </a>
            </div>
          </div>
        </div>
        <br>

        <label>Price_id</label>
<p>
	{{ $stock->price_id }}
</p> <label>Day</label>
<p>
	{{ $stock->day }}
</p> <label>Code</label>
<p>
	{{ $stock->code }}
</p> <label>Owner</label>
<p>
	{{ $stock->owner }}
</p> <label>Category_id</label>
<p>
	{{ $stock->category_id }}
</p> <label>Pattern</label>
<p>
	{{ $stock->pattern }}
</p> <label>Market</label>
<p>
	{{ $stock->market }}
</p> <label>Remark</label>
<p>
	{{ $stock->remark }}
</p>
      </div>
    </div>
  </div>
</div>

@endsection
