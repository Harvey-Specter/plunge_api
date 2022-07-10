<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Category;

class CategoryPolicy extends Policy
{

    public function update(User $user, Topic $category)
    {
        return $user->isAuthorOf($category);
    }

    public function destroy(User $user, Topic $category)
    {
        return $user->isAuthorOf($category);
    }
}
