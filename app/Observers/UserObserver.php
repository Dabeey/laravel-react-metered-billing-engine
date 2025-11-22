<?php

namespace App\Observers;

class UserObserver
{
    public function creating(User $user){
        $user->available_credits = 10
    }
}
