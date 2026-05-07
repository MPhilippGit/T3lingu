<?php

use App\Models\Extension;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("xlf_files", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table
                ->foreignIdFor(Extension::class)
                ->references("id")
                ->on("extensions")
                ->onDelete("cascade");
            $table->string("filename");
            $table->string("source_locale");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("xlf_files");
    }
};
