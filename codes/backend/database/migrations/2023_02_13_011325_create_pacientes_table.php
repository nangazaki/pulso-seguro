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
            $table->string('imagem');
            $table->string('name');
            $table->string('sobrenome');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('usuario')->unique();
            $table->string('telefone', 9)->unique();

            $table->date('dataNascimento')->nullable();
            $table->string('genero')->nullable();
            $table->string('nBI')->nullable()->unique();

            $table->string('provincia')->nullable();
            $table->string('municipio')->nullable();
            $table->string('bairro')->nullable();
            $table->string('rua')->nullable();
    
            $table->timestamps();
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
