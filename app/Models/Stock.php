<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stock extends Model
{
    use HasFactory;

    // protected $fillable = ['price_id', 'day', 'code', 'owner', 'category_id', 'pattern', 'market', 'remark'];
    protected $fillable = ['price_id', 'day', 'code', 'owner', 'category_id', 'pattern', 'market', 'remark'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
