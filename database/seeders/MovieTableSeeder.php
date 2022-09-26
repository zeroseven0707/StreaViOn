<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     
        $movie =[
            [
                'name' => 'Batman Full Movie Cinematic (2021) All Batman Arkham Cinematics 4K ULTRA HD Superhero Action',
                'slug' => 'Batman',
                'category' => 'Super Hero',
                'video_url' => 'https://www.youtube.com/watch?v=frh95XBeV_o&t=575s',
                'thumbnail' => 'images/featured-2.png',
                'rating' => '4.3',
                'isfeatured' =>false
            ],[
                'name' => 'Superman Sang Penyelamat Berkekuatan Super Dari Bangsa Krypton - ALUR CERITA FILM Man Of Steel',
                'slug' => 'Superman',
                'category' => 'Super Hero',
                'video_url' => 'https://www.youtube.com/watch?v=Fy7pREeJodw',
                'thumbnail' => 'images/featured-3.png',
                'rating' => '4.3',
                'isfeatured' =>true,
            ], 
        ];
        Movie::insert($movie);
    }
}
