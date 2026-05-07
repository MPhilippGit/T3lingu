<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class XlfUnit extends Model
{
    /** @use HasFactory<\Database\Factories\XlfUnitFactory> */
    use HasFactory;

    public function translations()
    {
        return $this->hasMany(Translation::class);
    }

    public function xlfFile()
    {
        return $this->belongsTo(XlfFile::class);
    }
}
