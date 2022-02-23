<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Carbon;
class StoreSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            'name' => 'Jollibee',
            'location' => json_encode(array(0 => 'Panabo', 1 => 'Tagum', 2 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'KFC',
            'location' => json_encode(array(0 => 'Panabo', 1 => 'Tagum', 2 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'Chowking',
            'location' => json_encode(array(0 => 'Tagum', 1 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // DB::table('stores')->insert([
        //     'name' => 'MCDO',
        //     'location' => json_encode(array(0 => 'Panabo', 1 => 'Tagum', 2 => 'Davao'), true),
        //     'created_at' => Carbon::now(),
        //     'updated_at' => Carbon::now(),
        // ]);

        DB::table('stores')->insert([
            'name' => 'MCDO',
            'location' => 'Panabo, Tagum, Davao',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'Mang Inasal',
            'location' => json_encode(array(0 => 'Panabo', 1 => 'Tagum', 2 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'Pizza Hut',
            'location' => json_encode(array(0 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'Burger King',
            'location' => json_encode(array(0 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'JM Shawarma',
            'location' => json_encode(array(0 => 'Panabo', 1 => 'Tagum', 2 => 'Davao'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'Den\'s Cafe',
            'location' => json_encode(array(0 => 'Panabo'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('stores')->insert([
            'name' => 'NorthCup',
            'location' => json_encode(array(0 => 'Panabo'), true),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
