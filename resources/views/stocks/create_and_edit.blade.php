@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">

      <div class="card-header">
        <h1>
          Stock /
          @if($stock->id)
            Edit #{{ $stock->id }}
          @else
            Create
          @endif
        </h1>
      </div>

      <div class="card-body">
        @if($stock->id)
          <form action="{{ route('stocks.update', $stock->id) }}" method="POST" accept-charset="UTF-8">
          <input type="hidden" name="_method" value="PUT">
        @else
          <form action="{{ route('stocks.store') }}" method="POST" accept-charset="UTF-8">
        @endif

          @include('common.error')

          <input type="hidden" name="_token" value="{{ csrf_token() }}">

          
                <div class="mb-3">
                    <label for="price_id-field">Price_id</label>
                    <input class="form-control" type="text" name="price_id" id="price_id-field" value="{{ old('price_id', $stock->price_id ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="day-field">Day</label>
                    <input class="form-control" type="text" name="day" id="day-field" value="{{ old('day', $stock->day ) }}" />
                </div> 
                <div class="mb-3">
                	<label for="code-field">Code</label>
                	<input class="form-control" type="text" name="code" id="code-field" value="{{ old('code', $stock->code ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="owner-field">Owner</label>
                    <input class="form-control" type="text" name="owner" id="owner-field" value="{{ old('owner', $stock->owner ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="category_id-field">Category_id</label>
                    <input class="form-control" type="text" name="category_id" id="category_id-field" value="{{ old('category_id', $stock->category_id ) }}" />
                </div> 
                <div class="mb-3">
                    <label for="pattern-field">Pattern</label>
                    <input class="form-control" type="text" name="pattern" id="pattern-field" value="{{ old('pattern', $stock->pattern ) }}" />
                </div> 
                <div class="mb-3">
                	<label for="market-field">Market</label>
                	<input class="form-control" type="text" name="market" id="market-field" value="{{ old('market', $stock->market ) }}" />
                </div> 
                <div class="mb-3">
                	<label for="remark-field">Remark</label>
                	<input class="form-control" type="text" name="remark" id="remark-field" value="{{ old('remark', $stock->remark ) }}" />
                </div>

          <div class="well well-sm">
            <button type="submit" class="btn btn-primary">Save</button>
            <a class="btn btn-link float-xs-right" href="{{ route('stocks.index') }}"> <- Back</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

@endsection
