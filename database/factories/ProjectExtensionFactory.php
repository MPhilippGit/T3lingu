<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\ProjectExtension;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ProjectExtension>
 */
class ProjectExtensionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => "rscw_" . fake()->word(),
            "project_id" => Project::factory(),
        ];
    }
}
