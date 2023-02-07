<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nome', 15);
            $table->string('sobrenome', 15);
            $table->string('email', 45);
            $table->string('password', 45);
            $table->string('telefone', 15);
            $table->string('especializacao', 45);
            $table->string('N_da_carteira', 45);
            $table->integer('idade');
            $table->string('genero', 10);
            $table->string('N_BI', 45);
            $table->string('imagem', 100);
            // Morada 

            $table->string('Provincia', 20);
            $table->string('municipio', 20);
            $table->string('bairro', 20);
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medicos');
    }
}
