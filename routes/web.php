<?php

use App\Http\Controllers\ModalController;
use App\Http\Controllers\NaughtsAndCrossesController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('users', [UserController::class, 'users'])
    ->name('users');

Route::patch('user/update', [UserController::class, 'updateUser'])
    ->name('user.update');

Route::get('naughtsandcrosses', [NaughtsAndCrossesController::class, 'index'])
    ->name('naughtsandcrosses');

Route::get('modals', [ModalController::class, 'index'])
    ->name('modals');

require __DIR__.'/settings.php';
