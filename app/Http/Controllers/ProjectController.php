<?php

namespace App\Http\Controllers;

use App\Models\LanguageSource;
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

        $this->data = self::appendRoutes($this->data);
        $this->data["schema"] = self::$PROJECT_SCHEMA;
        $this->data = self::appendRoutes($this->data);

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
     * Display the specified resource.
     */
    public function single(string $projectId): Response
    {
        //
        $project = Project::find($projectId);

        $extensions = $project->extensions;

        foreach ($extensions as $extension) {
            $sources = $extension->languageSources;
            $this->data["sources"] = $sources;
        }

        $this->data["project"] = $project;
        $this->data["extensions"] = $extensions ?? [];
        $this->data = Controller::appendRoutes($this->data);

        return Inertia::render("Projects/Project", $this->data);
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
