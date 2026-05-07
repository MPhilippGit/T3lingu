<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class XlfFile extends Model
{
    /** @use HasFactory<\Database\Factories\XlfFileFactory> */
    use HasFactory;

    public function xlfUnits()
    {
        return $this->hasMany(XlfUnit::class);
    }

    public function extension()
    {
        return $this->hasMany(Extension::class);
    }
}
