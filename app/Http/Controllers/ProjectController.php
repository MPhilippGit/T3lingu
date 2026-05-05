<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Exception;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    private array $data = [];

    public static array $PROJECT_SCHEMA = ["id", "name", "version"];
    /**
     * Renders the list view of all projects
     */
    public function index(): Response
    {
        $projects = Project::all()
            ->select(...self::$PROJECT_SCHEMA)
            ->sortBy("updated_at");

        foreach ($projects as $project) {
            $this->data["projects"][] = $project;
        }

        $this->data = self::appendRoutes($this->data);
        $this->data["schema"] = self::$PROJECT_SCHEMA;

        return Inertia::render("Projects/Projects", $this->data);
    }
    /**
     * Deletes a model instance of a project
     */
    public function delete(
        Request $request,
        string $id,
    ): string|RedirectResponse {
        try {
            $project = Project::all()->findOrFail($id);
            $project->delete();
            return redirect("/projects");
        } catch (Exception $e) {
            return redirect("/projects");
        }
    }
}
