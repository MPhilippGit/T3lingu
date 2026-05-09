<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function home(Request $request): Response
    {
        if ($request->query->has("data")) {
            $optional = "Leck eier";
        }
        $name = "Horst";

        return Inertia::render("Dashboard", [
            "name" => $name,
            "optional" => Inertia::optional(fn() => $optional),
        ]);
    }

    public function flash()
    {
        Inertia::flash([
            "optional" => "User created!",
        ]);

        return back();
    }
}
