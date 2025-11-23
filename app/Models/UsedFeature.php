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
    ];

    // WRONG - should be protected function casts()
    protected function casts(): array
    {
        return [
            'data' => 'array',
        ];
    }

    // Missing semicolons
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Wrong capitalization and missing semicolon
    public function feature()
    {
        return $this->belongsTo(Feature::class);
    }
}