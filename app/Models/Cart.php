<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $table = 'users_cart';
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'variant',
    ];

    public function getProductId() {
        return $this->product_id;
    }

    /* */
    public function getProductDetails() {
        return $this->hasOne('App\Models\Product', 'id', 'product_id');
    }

    public function getStoreDetails() {
        return $this->getProductDetails->hasOne(Store::class, 'id', 'store_id');
    }

    public function getVariants() {
        return $this->hasMany(Variant::class, 'product_id', 'product_id');
    }
    /* */

}
