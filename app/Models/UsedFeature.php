<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsedFeature extends Model
{
    protected $fillable = [
        'credits',
        'feature_id',
        'user_id',
        'data',
        'data'
    ];

    // Correct cast syntax
    protected $casts = [
        'data' => 'array',
    ];

    // Relationship to user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship to feature
    public function feature()
    {
        return $this->belongsTo(Feature::class);
    }
}
