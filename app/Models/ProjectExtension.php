<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Project;

use Illuminate\Database\Eloquent\Model;

#[Table("tx_project_extensions")]
#[Fillable(["name", "last_updated", "project_id"])]
class ProjectExtension extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    /**
     * returns the crorresponding project
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
