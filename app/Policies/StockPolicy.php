<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Stock;

class StockPolicy extends Policy
{
    public function update(User $user, Stock $stock)
    {
        // return $stock->user_id == $user->id;
        return true;
    }

    public function destroy(User $user, Stock $stock)
    {
        return true;
    }
}
