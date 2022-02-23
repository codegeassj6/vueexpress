<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Hash;
use Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Jollibee  */
        DB::table('products')->insert([
            'name' => 'Yum Burger Value Meal [Y1]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Yum Burger Cheese Value Meal [Y2]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bacon Cheese Yumburger Meal [Y3]',
            'store_id' => '1',

            'category' => 'Food',
            'sub_category' => 'Jollibee Burgers',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Yumburger Cheese Deluxe Meal [Y4]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',

            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bacon Deluxe Cheese Yumburger Meal [Y5]',
            'store_id' => '1',

            'category' => 'Food',
            'sub_category' => 'Jollibee Burgers',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Amazing Aloha Yumburger Value Meal [Y6]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Yum Burger Champ Value Meal [Y7]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bacon Champ Value Meal [Y8]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Amazing Aloha Champ Value Meal [Y9]',
            'store_id' => '1',
            'sub_category' => 'Jollibee Burgers',
            'category' => 'Food',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Variants
        DB::table('products')->insert([
            'name' => 'Jolly Hotdog Cheesy Classic',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jolly Hotdogs',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // variants
        DB::table('products')->insert([
            'name' => 'Burger Steak',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Ultimate Burger Steak',
            'store_id' => '1',

            'category' => 'Food',
            'sub_category' => 'Jollibee Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Burger Steak Family Pan',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Jolly Spaghetti',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jolly Spaghetti',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken Joy',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Chicken Joy',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken Joy Bucket',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Chicken Joy',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Family Meal A',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Family Super Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Family Meal B',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Family Super Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Jolly Crispy Fries',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee French Fries',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Original Tuna Pie',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Peach Mango Pie (Solo)',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Buko Pie (Solo)',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Ube Macapuno Pie (Solo)',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Yum Burger with Reg. Pineapple Juice + Toy',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Kiddie Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Jolly Spaghetti with Reg. Pineapple Juice + Toy',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Kiddie Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken Joy with Reg. Pineapple Juice + Toy',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Kiddie Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Burger Steak with Reg. Pineapple Juice + Toy',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => 'Jollibee Kiddie Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chocolate Sundae Twirl',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Coke Float',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Vanilla Cone Twirl',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chocolate Cone Twirl',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Mini Sundae Twirl',
            'store_id' => '1',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        /* Jollibee  */

        /* KFC */
        DB::table('products')->insert([
            'name' => 'Bucket Meal With Chicken Chops',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Variety Bucket Meal With 1.5L Coke',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bucket Meal',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bucket Meal With Rice Drinks And Spaghetti',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bucket Meal With Rice Fixins Drinks And Brownies',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Bucket Meal With Rice And Drinks',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken And Zinger Steak Box',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Bucket Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Shots',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Shots',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Zinger',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => 'Burgers and Twisters',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Coleslaw',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Mashed Potato',
            'store_id' => '2',
            'category' => 'Food',
            'sub_category' => null,
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);


        /* KFC */

        /* Chowking */

        DB::table('products')->insert([
            'name' => 'Chick \'n Sauce',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Sweet \'n\' Sour',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Salt & Pepper Pork',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chinese-Style Fried Chicken',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chao Fan w/ Fried Chicken',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Salt & Pepper Pork w/ 3pc. Dimsum',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Sweet \'n\' Sour Pork w/ 3pc. Dimsum',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Lumpiang Shanghai Rice Meal',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chopsuey',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chinese Rice Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Mami',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Noodles',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Lomi',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Noodles',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Pancit Canton',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Noodles',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Pork Chao Fan',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chao Fan',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Beef Chao Fan',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chao Fan',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Yang Chow Chao Fan',
            'store_id' => '3',
            'category' => 'Food',
            'sub_category' => 'Chao Fan',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        /* Chowking */

        /* MCDO */
        DB::table('products')->insert([
            'name' => 'Cheeseburger',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'MCDO Fries',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Fries',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Burger Mcdo',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Cheesy Burger McDo',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'McCrispy Chicken Sandwich',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Cheeseburger Deluxe',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Double Cheeseburger',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'McChicken',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Quarter Pounder with Cheese',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Big Mac',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Burger Value Meals',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'McSpaghetti',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Happy Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Burger McDo',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Happy Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Cheesy Burger McDo',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Happy Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken McNuggets',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Happy Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('products')->insert([
            'name' => 'Chicken McDo',
            'store_id' => '4',
            'category' => 'Food',
            'sub_category' => 'Mcdo Happy Meal',
            'average_rating' => rand(1,5),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);



        /* MCDO */
    }
}
