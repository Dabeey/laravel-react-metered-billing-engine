<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Package;
use App\Models\Feature;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
     
        User::factory()->create([
            'name'=>'Jane',
            'email'=>'jane123@gmail.com',
            'password'=>bcrypt('jane123')
        ]);

        // Seed packages
        Package::create([
            'name' => 'Silver',
            'price'=>20,
            'credits' => 100
        ]);

        Package::create([
            'name' => 'Gold',
            'price'=>50,
            'credits' => 500
        ]);

        // Seed features
        Feature::create([
            'image'=>'https://static.vecteezy.com/system/resources/previews/000/583/100/original/vector-button-plus-icon.jpg',
            'route_name'=>'feature1.index',
            'name'=>'Calculate Sum',
            'description'=>'Calculate the sum of two numbers.',
            'required_credits'=>1,
            'active'=>true,
        ]);

        Feature::create([
            'image'=>'https://cdn3.iconfinder.com/data/icons/fanaticons/100/Subtract_Circle_Filled-512.png',
            'route_name'=>'feature2.index',
            'name'=>'Calculate Difference',
            'description'=>'Calculate the difference between two numbers.',
            'required_credits'=>3,
            'active'=>true,
        ]);
    }
}
