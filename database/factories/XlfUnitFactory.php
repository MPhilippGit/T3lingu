<?php

namespace Database\Factories;

use App\Models\XlfFile;
use App\Models\XlfUnit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<XlfUnit>
 */
class XlfUnitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "xlf_file_id" => XlfFile::factory(),
            "unit_key" =>
                fake()->word() . "." . fake()->word() . "." . fake()->word(),
            "source" => fake()->sentence(),
        ];
    }
}
