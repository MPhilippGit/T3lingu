<?php

namespace Database\Factories;

use App\Models\Translation;
use App\Models\XlfUnit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Translation>
 */
class TranslationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "locale" => fake()->locale(),
            "translated_by" => "DeepL",
            "xlf_unit_id" => XlfUnit::factory(),
            "is_translated" => fake()->boolean(),
        ];
    }
}
