<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\IService;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(
        private readonly IService $userService,
    ) {}

    public function users()
    {
        return Inertia::render('users', [
            'users' => User::all(),
        ]);
    }
}
