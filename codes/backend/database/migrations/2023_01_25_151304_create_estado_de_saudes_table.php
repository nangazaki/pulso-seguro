<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadoDeSaudesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado_de_saudes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->float('temperatura');
            $table->float('batcardiaco');

             // Chave

             $table->unsignedBigInteger('paciente_id');
             $table->foreign('paciente_id')->references('id')->on('pacientes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estado_de_saudes');
    }
}
