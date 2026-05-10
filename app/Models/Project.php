<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

#[Fillable(["name", "version", "gitlab_url"])]
class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    public static array $PROJECT_SCHEMA = ["id", "name", "version"];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
     */
    public function extensions(): HasMany
    {
        return $this->hasMany(Extension::class);
    }
    /**
     * @return Collection<int,Model>
     */
    public static function sortAll(string $column): Collection
    {
        return Project::query()
            ->select(Project::$PROJECT_SCHEMA)
            ->orderBy($column)
            ->get();
    }
}
