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
    public static array $EXTENSION_SCHEMA = ["id", "name", "project_id"];
    public static array $SOURCE_SCHEMA = ["id", "language_id", "source"];
    /**
     * Renders the list view of all projects
     */
    public function index(): Response
    {
        $projects = Project::all()
            ->select(self::$PROJECT_SCHEMA)
            ->sortBy("name");

        foreach ($projects as $project) {
            $this->data["projects"][] = $project;
        }

        return Inertia::render("Projects/Projects", [
            "projects" => $projects,
            "schema" => self::$PROJECT_SCHEMA,
            "breadcrumb" => ["Dashboard", "Projects"],
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function single(string $projectId): Response
    {
        $project = Project::all()->findOrFail($projectId);
        $data = $project->only(self::$EXTENSION_SCHEMA);
        $extensions = $project->extensions ?? [];

        return Inertia::render("Projects/Project", [
            "project" => $data,
            "extensions" => $extensions,
            "schema" => self::$EXTENSION_SCHEMA,
            "breadcrumb" => ["Dashboard", "Projects", $project->name],
        ]);
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
            return abort(404);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): void
    {
        //
        return;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): void
    {
        //
        return;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project): void
    {
        //
        return;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project): void
    {
        //
        return;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project): void
    {
        //
        return;
    }
}
