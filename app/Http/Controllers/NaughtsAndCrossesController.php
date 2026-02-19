<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class NaughtsAndCrossesController extends Controller
{
    public function index()
    {
        return Inertia::render('naughts-and-crosses');
    }
}
