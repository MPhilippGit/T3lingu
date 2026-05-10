<?php

namespace App\Http\Controllers;

use App\Models\Extension;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    //
    public function home(): Response
    {
        return Inertia::render("Dashboard", [
            "user.name" => "Muschuu",
            "content" => Inertia::optional(fn() => Extension::all()),
        ]);
    }
}
