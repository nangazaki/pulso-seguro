<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Arão Domingos',
            'sobrenome' => 'João',
            'usuario' => 'araodomingos',
            'email' => 'araodomingos@gmail.com',
            'telefone' => '987654321',
            'imagem' => 'qwertytrew.png',
            'password' => Hash::make('qwerty'),
        ]);
    }
}
