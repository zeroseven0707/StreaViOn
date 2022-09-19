<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class User_subscription extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'user_id',
        'subscription_plan_id',
        'price',
        'expired',
        'payment_status',
        'snapToken',
    ];
    public function subscriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }
}
