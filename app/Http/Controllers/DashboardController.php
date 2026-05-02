<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectExtensions;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    private array $data = [];

    public function dashboard(): Response
    {
        $projects = Project::all()
            ->select("name", "id", "version")
            ->sortBy("updated_at");

        foreach ($projects as $project) {
            $extensions = ProjectExtensions::all()
                ->where("project_id", $project["id"])
                ->toArray();
            $project["extensions"] = $extensions;
            $this->data[] = $project;
        }

        return Inertia::render("Dashboard", $this->data);
    }
}
