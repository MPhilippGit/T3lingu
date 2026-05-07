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

        dd($project);
        return Inertia::render("Projects/Projects", $this->data);
    }
    /**
     * Display the specified resource.
     */
    public function single(string $projectId): Response
    {
        $projects = Project::all();
        $project = $projects->findOrFail($projectId);

        $extensions = $project->extensions;

        $this->data["project"] = $project;
        $this->data["extensions"] = $extensions ?? [];
        $this->data = Controller::appendRoutes($this->data);

        return Inertia::render("Projects/Project", $this->data);
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
