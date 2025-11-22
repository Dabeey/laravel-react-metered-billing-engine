<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'status',
        'price',
        'credits',
        'session_id',
        'feature_id',
        'package_id',    
    ],

    public function user() {
        return $this->belongsto(User::class)
    }
}
