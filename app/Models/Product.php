<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable = [
        'name',
        'store_id',
        'category',
        'sub_category',
    ];

    public function getStoreDetails() {
        return $this->hasOne(Store::class, 'id', 'store_id');
    }

    public function getVariants() {
        return $this->hasMany(Variant::class, 'product_id', 'id')->orderBy('price', 'ASC');
    }

}
