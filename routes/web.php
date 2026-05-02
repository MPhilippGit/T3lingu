<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Models\Project;

Route::get("/", [DashboardController::class, "show"]);

Route::get("/new/{name}", function (string $name) {
    $project = Project::create([
        "name" => $name,
        "gitlab_url" => "google.com",
        "version" => "14"
    ]);
    return 'Hello';
});
