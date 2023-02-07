<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nome', 45);
            $table->string('sobrenome', 45);
            $table->string('email', 45);
            $table->string('password', 45);
            $table->string('telefone', 45);
            $table->integer('idade');
            $table->string('genero', 45);
            $table->string('N_BI', 45);
            $table->string('imagem', 100);

            // Morada

            $table->string('Provincia', 45);
            $table->string('municipio', 45);
            $table->string('bairro', 45);

            // Chave

            $table->unsignedBigInteger('medico_id');
            $table->foreign('medico_id')->references('id')->on('medicos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
}
