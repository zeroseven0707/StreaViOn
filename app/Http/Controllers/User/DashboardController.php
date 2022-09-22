<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;


class DashboardController extends Controller
{
    public function index(){
        $featuredmovie = Movie::whereIsfeatured(true)->get();
        $movie = Movie::all();
        return Inertia::render('User/Dashboard/Index',
        [
            'featuredMovies' => $featuredmovie,
            'movies' => $movie,
        ]);
    }
}
