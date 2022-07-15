<?php

namespace App\Http\Queries;

use App\Models\Stock;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class StockQuery extends QueryBuilder
{
    public function __construct()
    {
        parent::__construct(Stock::query());

        $this->allowedIncludes('user', 'category');
    }
}