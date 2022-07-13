@extends('layouts.app')

@section('content')
<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">
      <div class="card-header">
        <h1>
          Stock
          <a class="btn btn-success float-xs-right" href="{{ route('stocks.create') }}">Create</a>
        </h1>
      </div>

      <div class="card-body">
        @if($stocks->count())
          <table class="table table-sm table-striped">
            <thead>
              <tr>
                <th class="text-xs-center">#</th>
                <th>Price_id</th> <th>Day</th> <th>Code</th> <th>Owner</th> <th>Category_id</th> <th>Pattern</th> <th>Market</th> <th>Remark</th>
                <th class="text-xs-right">OPTIONS</th>
              </tr>
            </thead>

            <tbody>
              @foreach($stocks as $stock)
              <tr>
                <td class="text-xs-center"><strong>{{$stock->id}}</strong></td>

                <td>{{$stock->price_id}}</td> <td>{{$stock->day}}</td> <td>{{$stock->code}}</td> <td>{{$stock->owner}}</td> <td>{{$stock->category_id}}</td> <td>{{$stock->pattern}}</td> <td>{{$stock->market}}</td> <td>{{$stock->remark}}</td>

                <td class="text-xs-right">
                  <a class="btn btn-sm btn-primary" href="{{ route('stocks.show', $stock->id) }}">
                    V
                  </a>

                  <a class="btn btn-sm btn-warning" href="{{ route('stocks.edit', $stock->id) }}">
                    E
                  </a>

                  <form action="{{ route('stocks.destroy', $stock->id) }}" method="POST" style="display: inline;" onsubmit="return confirm('Delete? Are you sure?');">
                    {{csrf_field()}}
                    <input type="hidden" name="_method" value="DELETE">

                    <button type="submit" class="btn btn-sm btn-danger">D </button>
                  </form>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
          {!! $stocks->render() !!}
        @else
          <h3 class="text-xs-center alert alert-info">Empty!</h3>
        @endif
      </div>
    </div>
  </div>
</div>

@endsection
