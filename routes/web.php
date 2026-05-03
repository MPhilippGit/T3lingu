<?php

use App\Http\Controllers\ContentController;
use Illuminate\Support\Facades\Route;
use App\Models\Project;
use Nette\Utils\DateTime;

Route::get("/", [ContentController::class, "dashboard"]);

Route::get("/projects", [ContentController::class, "projects"]);

Route::get("/new/{name}", function (string $name) {
    $project = Project::create([
        "name" => $name,
        "gitlab_url" => "google.com",
        "version" => "14",
    ]);
    return "Hello";
});

Route::get("/new/{id}/{name}", function (int $id, string $name) {
    $date = new DateTime();

    $project = ProjectExtensions::create([
        "name" => $name,
        "last_updated" => $date,
        "project_id" => $id,
    ]);
    return "Hello";
});
