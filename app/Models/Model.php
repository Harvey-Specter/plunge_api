<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;
use App\Models\DateTimeInterface as DateTimeInterface;

class Model extends EloquentModel
{
    // protected $dateFormat = 'U';

    public function scopeRecent($query)
    {
        return $query->orderBy('id', 'desc');
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'desc');
    }
    protected $casts = [
        'created_at' => 'date:Y-m-d H:i',
        'joined_at' => 'datetime:Y-m-d H:00',
    ];
}
