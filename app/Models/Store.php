<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Store extends Model
{
    use HasFactory;

    protected $table = 'stores';
    protected $fillable = ['name', 'type', 'location'];

    public function getProducts() {
        return $this->hasMany('App\Models\Product', 'store_id', 'id')->orderByDesc('average_rating');
    }

    public function getVariants() {
        return $this->hasManyThrough('App\Models\Variant', 'App\Models\Product');
    }
}
