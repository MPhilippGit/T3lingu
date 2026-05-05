<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectExtensions;
use Inertia\Inertia;
use Inertia\Response;

class ContentController extends Controller
{
    private array $data = [];

    public static array $PROJECT_SCHEMA = ["id", "name", "version"];

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
            $this->data["projects"][] = $project;
        }

        $this->data = Controller::appendRoutes($this->data);

        return Inertia::render("Dashboard", $this->data);
    }

    public function projects(): Response
    {
        $projects = Project::all()
            ->select(...self::$PROJECT_SCHEMA)
            ->sortBy("updated_at");

        foreach ($projects as $project) {
            $this->data["projects"][] = $project;
        }

        $this->data = Controller::appendRoutes($this->data);
        $this->data["schema"] = self::$PROJECT_SCHEMA;

        return Inertia::render("Projects/Projects", $this->data);
    }
}
