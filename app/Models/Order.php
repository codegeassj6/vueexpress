<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Store;
use App\Models\Review;


class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = ['user_id', 'product_id', 'quantity', 'variant', 'status', 'total_price', 'fee', 'group'];

    public function getProductDetails() {
        return $this->belongsTo('App\Models\Product', 'product_id', 'id');
    }

    public function getStoreDetails() {
        return $this->getProductDetails->hasOne(Store::class, 'id', 'store_id');
    }

    public function getComment() {
        return $this->belongsTo('App\Models\Review', 'user_id', 'user_id')->where('product_id', $this->product_id);
    }

    public function getVariants() {
        return $this->hasMany(Variant::class, 'product_id', 'product_id');
    }
}
