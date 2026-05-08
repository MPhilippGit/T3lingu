<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class XlfFile extends Model
{
    /** @use HasFactory<\Database\Factories\XlfFileFactory> */
    use HasFactory;

    public function xlfUnits(): HasMany
    {
        return $this->hasMany(XlfUnit::class);
    }

    public function extension(): BelongsTo
    {
        return $this->belongsTo(Extension::class);
    }
}
