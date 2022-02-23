<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Carbon;

class VariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('variants')->insert([
            'product_id' => 1,
            'variant' => null,
            'description' => 'Y1',

            'price' => 86,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 2,
            'variant' => null,
            'description' => 'Y2',

            'price' => 96,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 3,
            'variant' => null,
            'description' => 'Y3',

            'price' => 110,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 4,
            'variant' => null,
            'description' => 'Y4',

            'price' => 120,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 5,
            'variant' => null,
            'description' => 'Y5',

            'price' => 130,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 6,
            'variant' => null,
            'description' => 'Y6',

            'price' => 135,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 7,
            'variant' => null,
            'description' => 'Y7',

            'price' => 195,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 8,
            'variant' => null,
            'description' => 'Y8',

            'price' => 230,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 9,
            'variant' => null,
            'description' => 'Y9',
            'price' => 245,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 10,
            'variant' => 'H1',
            'description' => 'H1',

            'price' => 80,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 10,
            'variant' => 'H2',
            'description' => 'H2',

            'price' => 120,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 10,
            'variant' => 'H3',
            'description' => 'H3',

            'price' => 125,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 11,
            'variant' => 'B1',
            'description' => '1 pc Burger Steak w/ Drink [B1]',

            'price' => 65,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 11,
            'variant' => 'B2',
            'description' => '2 pc Burger Steak w/ Drink [B2]',
            'price' => 90,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 11,
            'variant' => 'B3',
            'description' => '1 pc Burger Steak with 3 pcs Shanghai w/ Drink [B3]',
            'price' => 109,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 11,
            'variant' => 'B4',
            'description' => '1 pc Burger Steak w/ Fries & Drink [B4]',
            'price' => 79,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 12,
            'variant' => 'w/ Egg Meal & Drink',
            'description' => 'Ultimate Burger Steak w/ Egg Meal & Drink',
            'price' => 190,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 12,
            'variant' => 'w/o Egg Meal & Drink',
            'description' => 'Ultimate Burger Steak w/o Egg Meal & Drink',
            'price' => 175,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 13,
            'variant' => 'B7',
            'description' => 'Burger Steak Family Pan 6pcs [B7]',
            'price' => 255,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 13,
            'variant' => 'B8',
            'description' => 'Burger Steak Family Pan 8pcs [B8]',
            'price' => 339,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 14,
            'variant' => 'S1',
            'description' => 'Jolly Spaghetti w/ Drink [S1]',

            'price' => 65,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 14,
            'variant' => 'S2',
            'description' => 'Jolly Spaghetti w/ Fries & Drink [S2]',
            'price' => 95,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 14,
            'variant' => 'S3',
            'description' => 'Jolly Spaghetti w/ Yumburger & Drink [S3]',
            'price' => 95,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 14,
            'variant' => 'S4',
            'description' => 'Jolly Spaghetti w/ Cheesy Yumburger & Drink [S4]',
            'price' => 110,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 14,
            'variant' => 'S5',
            'description' => 'Jolly Spaghetti w/ Burger Steak & Drink [S5]',
            'price' => 99,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C1',
            'description' => '1 pc Chicken Joy w/ Rice & Drink [C1]',

            'price' => 95,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C2',
            'description' => '1 pc Chicken Joy w/ Double Rice & Drink [C2]',
            'price' => 99,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C3',
            'description' => '1 pc Chicken Joy w/ Jolly Spaghetti & Drink [C3]',
            'price' => 125,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C4',
            'description' => '1 pc Chicken Joy w/ Palabok & Drink [C4]',
            'price' => 175,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C5',
            'description' => '2 pcs Chicken Joy w/ Rice & Drink [C5]',
            'price' => 170,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 15,
            'variant' => 'C6',
            'description' => '1 pc Chicken Joy w/ Rice, Fries & Drink [C6]',
            'price' => 105,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 16,
            'variant' => '6 pcs',
            'description' => '6 pc Chicken Joy Bucket',
            'price' => 399,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 16,
            'variant' => '8 pcs',
            'description' => '8 pc Chicken Joy Bucket',
            'price' => 499,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 17,
            'variant' => '6 pcs',
            'description' => 'Family Meal A - 6 pieces Chicken Joy Bucket, 3 rice, 3 sides, 3 sundaes, 3 drinks',

            'price' => 599,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 17,
            'variant' => '8 pcs',
            'description' => 'Family Meal A - 8 pieces Chicken Joy Bucket, 4 rice, 4 sides, 4 sundaes, 4 drinks',
            'price' => 799,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 18,
            'variant' => '6 pcs',
            'description' => '6 pieces Chicken Joy Bucket, 3 spaghetti, 3 rice, 3 drinks',
            'price' => 550,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 18,
            'variant' => '8 pcs',
            'description' => 'Family Meal B - 8 pieces Chicken Joy Bucket, 4 spaghetti, 4 rice, 4 drinks',
            'price' => 799,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 19,
            'variant' => 'Regular',
            'description' => 'Jolly Crispy Fries (Regular)',
            'price' => 42,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 19,
            'variant' => 'Large',
            'description' => 'Jolly Crispy Fries (Large)',
            'price' => 60,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 19,
            'variant' => 'Jumbo',
            'description' => 'Jolly Crispy Fries (Jumbo)',
            'price' => 75,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 20,
            'variant' => 'P2',
            'description' => '1 pc Original Tuna Pie w/ Fries & Drink [P2]',
            'price' => 89,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 21,
            'variant' => null,
            'description' => '1pc Peach Mango Pie (Solo)',
            'price' => 30,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 22,
            'variant' => null,
            'description' => '1pc Buko Pie (Solo)',
            'price' => 30,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 23,
            'variant' => null,
            'description' => '1pc Ube Macapuno Pie (Solo)',
            'price' => 30,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 24,
            'variant' => null,
            'description' => 'Yum Burger with Reg. Pineapple Juice + Toy',
            'price' => 110,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 25,
            'variant' => null,
            'description' => 'Jolly Spaghetti with Reg. Pineapple Juice + Toy',
            'price' => 116,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 26,
            'variant' => null,
            'description' => '1 pc Chicken Joy with Reg. Pineapple Juice + Toy',
            'price' => 157,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 27,
            'variant' => null,
            'description' => 'Burger Steak with Reg. Pineapple Juice + Toy',
            'price' => 116,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 28,
            'variant' => null,
            'description' => 'Chocolate Sundae Twirl',
            'price' => 30,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 29,
            'variant' => null,
            'description' => 'Coke Floats',
            'price' => 37,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 30,
            'variant' => null,
            'description' => 'Vanilla Cone Twirl',
            'price' => 10,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 31,
            'variant' => null,
            'description' => 'Chocolate Cone Twirl',
            'price' => 15,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 32,
            'variant' => null,
            'description' => 'Mini Sundae Twirl',
            'price' => 26,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 33,
            'variant' => '3pcs',
            'description' => '3-Pcs Bucket Meal With Chicken Chops',
            'price' => 541,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 33,
            'variant' => '4pcs',
            'description' => '4-Pcs Bucket Meal With Chicken Chops',
            'price' => 586,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 34,
            'variant' => '3pcs',
            'description' => '3-Pcs Variety Bucket Meal With 1.5L Coke',
            'price' => 611,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 34,
            'variant' => '4pcs',
            'description' => '4-Pcs Variety Bucket Meal With 1.5L Coke',
            'price' => 795,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 35,
            'variant' => '6pcs',
            'description' => '6-Pc Bucket Meal',
            'price' => 565,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 35,
            'variant' => '8pcs',
            'description' => '8-Pc Bucket Meal',
            'price' => 725,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 36,
            'variant' => '6pcs',
            'description' => '6-Pc Bucket Meal With Rice Drinks And Spaghetti',
            'price' => 660,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 36,
            'variant' => '8pcs',
            'description' => '8-Pc Bucket Meal With Rice Drinks And Spaghetti',
            'price' => 879,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 37,
            'variant' => '6pcs',
            'description' => '6-Pc Bucket Meal With Rice Fixins Drinks And Brownies',
            'price' => 640,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 37,
            'variant' => '8pcs',
            'description' => '8-Pc Bucket Meal With Rice Fixins Drinks And Brownies',
            'price' => 825,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 38,
            'variant' => '6pcs',
            'description' => '6-Pc Bucket Meal With Rice And Drinks',
            'price' => 495,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 38,
            'variant' => '8pcs',
            'description' => '8-Pc Bucket Meal With Rice And Drinks',
            'price' => 659,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 39,
            'variant' => '3pcs',
            'description' => '3-Pc Chicken And Zinger Steak Box',
            'price' => 565,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 39,
            'variant' => '4pcs',
            'description' => '4-Pc Chicken And Zinger Steak Box',
            'price' => 725,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 40,
            'variant' => 'Combo',
            'description' => 'Shots Combo',
            'price' => 115,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 40,
            'variant' => 'Large Shots Combo',
            'description' => 'Large Shots Combo',
            'price' => 170,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 40,
            'variant' => 'Regular Combo',
            'description' => 'Regular Shots',
            'price' => 70,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 40,
            'variant' => 'Large',
            'description' => 'Large Shots',
            'price' => 120,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 41,
            'variant' => 'Regular',
            'description' => 'Zinger',
            'price' => 125,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 41,
            'variant' => 'Combo',
            'description' => 'Zinger Combo',
            'price' => 160,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 42,
            'variant' => 'Regular',
            'description' => 'Coleslaw',
            'price' => 51,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 42,
            'variant' => 'Large',
            'description' => 'Large Coleslaw',
            'price' => 72,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 43,
            'variant' => 'Regular',
            'description' => 'Mashed Potato',
            'price' => 45,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 43,
            'variant' => 'Large',
            'description' => 'Large Mashed Potato',
            'price' => 62,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 44,
            'variant' => null,
            'description' => null,
            'price' => 106,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 45,
            'variant' => 'Chicken',
            'description' => 'Sweet \'n\' Sour Chicken',
            'price' => 106,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 45,
            'variant' => 'Chicken w/ Wonton Soup',
            'description' => 'Sweet \'n\' Sour Chicken w/ Wonton Soup',
            'price' => 144,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 45,
            'variant' => 'Pork',
            'description' => 'Sweet \'n\' Sour Pork',
            'price' => 123,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 45,
            'variant' => 'Fish',
            'description' => 'Sweet \'n\' Sour Fish',
            'price' => 129,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 46,
            'variant' => null,
            'description' => null,
            'price' => 123,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 47,
            'variant' => '1pc',
            'description' => null,
            'price' => 88,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 47,
            'variant' => '2pc',
            'description' => null,
            'price' => 168,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 47,
            'variant' => '1pc w/ Egg Fried Rice',
            'description' => '1pc. Chinese-Style Fried Chicken with Egg Fried Rice',
            'price' => 103,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 48,
            'variant' => 'Pork',
            'description' => 'Pork Chao Fan w/ Fried Chicken',
            'price' => 134,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 48,
            'variant' => 'Beff',
            'description' => 'Beef Chao Fan w/ Fried Chicken',
            'price' => 134,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 49,
            'variant' => null,
            'description' => null,
            'price' => 162,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 50,
            'variant' => null,
            'description' => null,
            'price' => 162,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 51,
            'variant' => null,
            'description' => null,
            'price' => 56,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 52,
            'variant' => null,
            'description' => null,
            'price' => 123,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 53,
            'variant' => 'Wonton',
            'description' => null,
            'price' => 66,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 53,
            'variant' => 'Pork Siomai',
            'description' => 'Siomai Mami (Pork Siomai)',
            'price' => 90,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 53,
            'variant' => 'Beef Siomai',
            'description' => 'Siomai Mami (Beef Siomai)',
            'price' => 90,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 53,
            'variant' => 'Beef',
            'description' => 'Beef Mami',
            'price' => 162,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 53,
            'variant' => 'Beef Wonton',
            'description' => 'Beef Wonton Mami',
            'price' => 162,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 54,
            'variant' => null,
            'description' => null,
            'price' => 123,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 55,
            'variant' => null,
            'description' => null,
            'price' => 56,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 55,
            'variant' => '1pc Chinese Style Fried Chicken',
            'description' => 'Pancit Canton with 1pc. Chinese Style Fried Chicken',
            'price' => 151,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 56,
            'variant' => 'Regular',
            'description' => null,
            'price' => 55,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 56,
            'variant' => 'Toppings',
            'description' => 'Pork Chao Fan with Topping',
            'price' => 97,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 57,
            'variant' => 'Regular',
            'description' => null,
            'price' => 118,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 57,
            'variant' => 'Toppings',
            'description' => 'Beef Chao Fan with Topping',
            'price' => 118,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 58,
            'variant' => 'Regular',
            'description' => null,
            'price' => 95,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 58,
            'variant' => 'Toppings',
            'description' => 'Yang Chow Chao Fan with Topping',
            'price' => 133,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 59,
            'variant' => 'Small',
            'description' => null,
            'price' => 100,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 59,
            'variant' => 'Medium',
            'description' => null,
            'price' => 120,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 60,
            'variant' => 'Small',
            'description' => null,
            'price' => 86,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 60,
            'variant' => 'Medium',
            'description' => null,
            'price' => 106,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 61,
            'variant' => 'Small',
            'description' => null,
            'price' => 96,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 61,
            'variant' => 'Medium',
            'description' => null,
            'price' => 96,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 62,
            'variant' => 'Small',
            'description' => null,
            'price' => 96,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 62,
            'variant' => 'Medium',
            'description' => null,
            'price' => 116,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 63,
            'variant' => 'Small',
            'description' => null,
            'price' => 124,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 63,
            'variant' => 'Medium',
            'description' => null,
            'price' => 144,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 64,
            'variant' => 'Small',
            'description' => null,
            'price' => 140,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 64,
            'variant' => 'Medium',
            'description' => null,
            'price' => 160,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 65,
            'variant' => 'Small',
            'description' => null,
            'price' => 146,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 65,
            'variant' => 'Medium',
            'description' => null,
            'price' => 166,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 66,
            'variant' => 'Small',
            'description' => null,
            'price' => 173,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 66,
            'variant' => 'Medium',
            'description' => null,
            'price' => 193,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 67,
            'variant' => 'Small',
            'description' => null,
            'price' => 173,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 67,
            'variant' => 'Medium',
            'description' => null,
            'price' => 193,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 68,
            'variant' => 'w/ Drink',
            'description' => null,
            'price' => 99,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 68,
            'variant' => 'w/ Drink & Fries',
            'description' => null,
            'price' => 120,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 69,
            'variant' => 'w/ Drink',
            'description' => null,
            'price' => 92,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 69,
            'variant' => 'w/ Drink & Fries',
            'description' => null,
            'price' => 113,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 70,
            'variant' => 'w/ Drink',
            'description' => null,
            'price' => 102,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 70,
            'variant' => 'w/ Drink & Fries',
            'description' => null,
            'price' => 123,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 71,
            'variant' => 'w/ Drink',
            'description' => '4pc Chicken McNuggets with Drink',
            'price' => 112,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 71,
            'variant' => 'w/ Drink & Fries',
            'description' => '4pc Chicken McNuggets with Drink',
            'price' => 131,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 72,
            'variant' => 'w/ Drink',
            'description' => '1pc Chicken McDo with Drink',
            'price' => 121,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('variants')->insert([
            'product_id' => 72,
            'variant' => 'w/ Drink & Fries',
            'description' => '1pc Chicken McDo with Drink and Fries',
            'price' => 141,
            'stock' => rand(3,10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

    }
}
