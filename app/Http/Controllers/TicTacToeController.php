<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TicTacToeController extends Controller
{
    public function index()
    {
        return Inertia::render('tic-tac-toe', []);
    }
}
