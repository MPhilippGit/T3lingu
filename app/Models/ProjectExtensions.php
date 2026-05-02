<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table("tx_project_extensions")]
#[Fillable(["name", "last_updated", "project_id"])]
class ProjectExtensions extends Model
{
    //
}
