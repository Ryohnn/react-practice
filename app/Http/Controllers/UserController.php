<?php

namespace App\Http\Controllers;

use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Http\Services\IService;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
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

    public function updateUser(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return to_route('modals')->with('success', 'Profile updated.');
    }
}
