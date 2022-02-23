<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'variant', 'stock', 'description', 'category', 'price'];
    protected $table = 'variants';

    public function getPrice() {
        return $this->price;
    }
}
