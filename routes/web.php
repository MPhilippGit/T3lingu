<?php

use App\Http\Controllers\ContentController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectExtensionsController;
use Illuminate\Support\Facades\Route;

Route::get("/", [ContentController::class, "dashboard"]);

Route::get("/projects", [ProjectController::class, "index"]);

Route::get("/project/{projectId}", [ProjectController::class, "single"]);
