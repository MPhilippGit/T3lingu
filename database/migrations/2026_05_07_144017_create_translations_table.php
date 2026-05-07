<?php

use App\Models\XlfUnit;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("translations", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table
                ->foreignIdFor(XlfUnit::class)
                ->references("id")
                ->on("xlf_units")
                ->onDelete("cascade");
            $table->string("locale");
            $table->boolean("is_translated");
            $table->enum("translated_by", ["AI", "DeepL", "Customer", "Other"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("translations");
    }
};
