<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StockRequest;

class StocksController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

	public function index()
	{
		$stocks = Stock::paginate();
		return view('stocks.index', compact('stocks'));
	}

    public function show(Stock $stock)
    {
        return view('stocks.show', compact('stock'));
    }

	public function create(Stock $stock)
	{
		return view('stocks.create_and_edit', compact('stock'));
	}

	public function store(StockRequest $request)
	{
		$stock = Stock::create($request->all());
		return redirect()->route('stocks.show', $stock->id)->with('message', 'Created successfully.');
	}

	public function edit(Stock $stock)
	{
        $this->authorize('update', $stock);
		return view('stocks.create_and_edit', compact('stock'));
	}

	public function update(StockRequest $request, Stock $stock)
	{
		$this->authorize('update', $stock);
		$stock->update($request->all());

		return redirect()->route('stocks.show', $stock->id)->with('message', 'Updated successfully.');
	}

	public function destroy(Stock $stock)
	{
		$this->authorize('destroy', $stock);
		$stock->delete();

		return redirect()->route('stocks.index')->with('message', 'Deleted successfully.');
	}
}