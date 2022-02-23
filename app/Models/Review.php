<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'product_id', 'comment', 'rating'];
    protected $table = 'reviews';

    public function getUser() {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

}
