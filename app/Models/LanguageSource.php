<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(["language_id", "filename", "source", "project_extension_id"])]
#[Table("tx_language_sources")]
class LanguageSource extends Model
{
    /** @use HasFactory<\Database\Factories\LanguageSourceFactory> */
    use HasFactory;

    public function projectExtension(): BelongsTo
    {
        return $this->belongsTo(ProjectExtension::class);
    }
}
