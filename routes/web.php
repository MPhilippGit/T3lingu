<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get("/", [DashboardController::class, "home"]);
Route::get("/flash", [DashboardController::class, "flash"]);

Route::get("/projects", [ProjectController::class, "index"]);

Route::get("/project/{projectId}", [ProjectController::class, "single"]);
