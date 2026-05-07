<?php

namespace Database\Factories;

use App\Models\LanguageSource;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<LanguageSource>
 */
class LanguageSourceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "language_id" =>
                fake()->word() . "." . fake()->word() . "." . fake()->word(),
            "filename" => "locallang.xlf",
            "source" => fake()->sentence(),
            "project_extension_id" => 1,
        ];
    }
}
