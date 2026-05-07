<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("tx_language_sources", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("language_id")->unique(true);
            $table->string("filename");
            $table->text("source");
            $table
                ->foreignId("project_extension_id")
                ->references("id")
                ->on("tx_project_extensions")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("tx_language_sources");
    }
};
