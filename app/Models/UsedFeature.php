<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsedFeature extends Model
{
    protected $fillable=[
        'credits',
        'feature_id',
        'user_id',
        'data'
    ];

    public function cast() {
        'data' => 'array'
    }

    public function user() {
        return $this->belongsto(User::class)
    }

    public function Feature() {
        return $this->belongsto(Feature::class)
    }

}
