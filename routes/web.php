<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get("/", [DashboardController::class, "home"])->name("home");

Route::resource("project", ProjectController::class);
