<?php

namespace Database\Factories;

use App\Models\Extension;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Extension>
 */
class ExtensionFactory extends Factory
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
