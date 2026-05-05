<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectExtension;
use Exception;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    private array $data = [];

    public static array $PROJECT_SCHEMA = ["id", "name", "version"];
    public static array $EXTENSION_SCHEMA = ["id", "name", "project_id"];
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
    public function delete(Request $request, string $id): RedirectResponse
    {
        try {
            $project = Project::all()->findOrFail($id);
            $project->delete();
            return redirect("/projects");
        } catch (Exception $e) {
            return redirect("/projects");
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function single(string $projectId)
    {
        //
        $project = Project::query()
            ->select(...self::$PROJECT_SCHEMA)
            ->where("id", $projectId)
            ->get();
        $extensions = ProjectExtension::query()
            ->select(...self::$EXTENSION_SCHEMA)
            ->where("project_id", $projectId)
            ->get();

        $this->data["project"] = $project;
        $this->data["extensions"] = $extensions;

        return Inertia::render("Projects/Project", $this->data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
