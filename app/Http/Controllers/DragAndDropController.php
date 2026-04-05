<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DragAndDropController
{
    public function index()
    {
        return Inertia::render('drag-and-drop');
    }
}
