<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('sobrenome');
            $table->string('usuario')->unique();

            $table->string('telefone', 9)->unique();

            $table->string('especialidade')->nullable();
            $table->string('idCarteira', 9)->nullable()->unique();
            $table->date('dataNascimento')->nullable();
            $table->string('genero')->nullable();
            $table->string('nBI')->nullable()->unique();
            $table->string('imagem')->nullable();

            $table->string('provincia')->nullable();
            $table->string('municipio')->nullable();
            $table->string('bairro')->nullable();
            $table->string('rua')->nullable();
            $table->boolean('isAdmin')->default(0);

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
