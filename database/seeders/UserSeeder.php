<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;
use Hash;
use Carbon;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Jhon Rey',
            'last_name' => 'Repuela',
            'email' => 'j6cafe2018@gmail.com',
            'contact' => mt_rand(639000000000, 639999999999),
            'password' => Hash::make('jhonreyj6'),
            'address' => null,
            'city' => 'Panabo',
            'landmark' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Jesedenn',
            'last_name' => 'Balaba',
            'email' => 'jcdnj6@gmail.com',
            'contact' => mt_rand(639000000000, 639999999999),
            'password' => Hash::make('laravelj6'),
            'address' => null,
            'city' => null,
            'landmark' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Jerald',
            'last_name' => 'Repuela',
            'email' => 'jard@gmail.com',
            'contact' => mt_rand(639000000000, 639999999999),
            'password' => Hash::make('laravelj6'),
            'address' => null,
            'city' => null,
            'landmark' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Jhonna Ann',
            'last_name' => 'Repuela',
            'email' => 'jhonna@gmail.com',
            'contact' => mt_rand(639000000000, 639999999999),
            'password' => Hash::make('laravelj6'),
            'address' => null,
            'city' => null,
            'landmark' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Cj',
            'last_name' => 'Repuela',
            'email' => 'cjrepuela@gmail.com',
            'contact' => mt_rand(639000000000, 639999999999),
            'password' => Hash::make('laravelj6'),
            'address' => null,
            'city' => null,
            'landmark' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
