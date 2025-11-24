<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    // Fillable attributes for mass assignment
    protected $fillable = [
        'status',
        'price',
        'credits',
        'session_id',
        'feature_id',
        'package_id',
        'user_id', // Make sure you include user_id if you associate transactions with users
    ];

    /**
     * Transaction belongs to a User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * Optionally, Transaction belongs to a Package
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    /**
     * Optionally, Transaction belongs to a Feature
     */
    public function feature(): BelongsTo
    {
        return $this->belongsTo(Feature::class);
    }
}
