<?php

namespace App\Http\Controllers;

use App\Models\ProjectExtension;
use Illuminate\Http\Request;

class ProjectExtensionsController extends Controller
{
    public static array $EXTENSION_SCHEMA = ["name", "project_id"];
    /**
     * Display a listing of the resource.
     * @return array
     */
    public function get(string $projectId)
    {
        $extensions = ProjectExtension::query()
            ->select(self::$EXTENSION_SCHEMA)
            ->where("project_id", $projectId);

        if (count($extensions)) {
            return [];
        }

        return $extensions->toArray();
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
    public function show(ProjectExtensions $projectExtensions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectExtensions $projectExtensions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(
        Request $request,
        ProjectExtensions $projectExtensions,
    ) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectExtensions $projectExtensions)
    {
        //
    }
}
