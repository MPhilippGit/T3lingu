<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get("/", [ProjectController::class, "dashboard"]);

Route::get("/projects", [ProjectController::class, "index"]);

Route::get("/project/{projectId}", [ProjectController::class, "single"]);
