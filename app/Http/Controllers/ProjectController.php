<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\XlfFile;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public static array $PROJECT_SCHEMA = ["id", "name", "version"];
    public static array $EXTENSION_SCHEMA = ["id", "name", "project_id"];
    public static array $FILE_SCHEMA = [
        "extension_id",
        "filename",
        "source_locale",
    ];

    public function index(): Response
    {
        $projects = Project::sortAll("name");
        return Inertia::render("ProjectList", [
            "projects" => $projects,
            "breadcrumb" => ["Dashboard", "Projects"],
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $projectId): Response
    {
        $project = Project::with("extensions.xlfFiles")->findOrFail($projectId);

        $extensions = $project->extensions->map(
            fn($ext) => [
                ...$ext->only(self::$EXTENSION_SCHEMA),
                "xlfFiles" => $ext->xlfFiles->map(
                    fn($f) => $f->only(self::$FILE_SCHEMA),
                ),
            ],
        );

        return Inertia::render("ProjectDetail", [
            "project" => $project->only(self::$PROJECT_SCHEMA),
            "extensions" => $extensions,
            "file" => Inertia::optional(
                fn() => XlfFile::where(
                    "extension_id",
                    $request["extension"],
                )->first(),
            ),
        ]);
    }

    public function delete(Request $request, string $id): RedirectResponse
    {
        $project = Project::all()->findOrFail($id);
        $project->delete();
        return redirect("/projects");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Project $project): void
    {
        dd($project);
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
