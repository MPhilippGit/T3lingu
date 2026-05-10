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
    public function show(Project $projectId): Response
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

    public function delete(Project $project): RedirectResponse
    {
        $project->delete();
        return redirect("/projects");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Project
    {
        $project = new Project();
        $project->name = $request->name;
        $project->version = $request->version;
        $project->gitlab_url = $request->gitlab_url;
        return redirect("/project");
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
