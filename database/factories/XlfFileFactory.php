<?php

namespace Database\Factories;

use App\Models\Extension;
use App\Models\XlfFile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<XlfFile>
 */
class XlfFileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "extension_id" => Extension::factory(),
            "filename" => fake()->word() . "xlf",
            "source_locale" => "en",
        ];
    }
}
