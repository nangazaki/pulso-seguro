<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
           'imagem',
            'name',
            'sobrenome',
            'email',
            'password',
            'usuario',
            'telefone',
            
            'especialidade',
            'idCarteira',
            'dataNascimento',
            'genero',
            'nBI',

            'provincia',
            'municipio',
            'bairro',
            'rua',

            'isAdmin' 
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function rulesMedico(){
        return [
            'imagem' => 'required|min:4|file|mimes:png,jpg',
            'name' => 'required',
            'sobrenome' => 'required',
            'email' => 'required|unique:users,email,'.$this->id.'|min:9',
            'password' => 'required',
            'usuario' => 'required|unique:users',
            'telefone' => 'required|unique:users',
            
            'especialidade' => 'required',
            'idCarteira' => 'required|unique:users',
            'dataNascimento' => 'required',
            'genero' => 'required',
            'nBI' => 'required|unique:users',

            'provincia' => 'required',
            'municipio' => 'required',
            'bairro' => 'required',
            'rua' => 'required',

        ];
    }

    public function rulesAdmin(){
        return [
            'imagem' => 'required|min:4|file|mimes:png,jpg',
            'name' => 'required',
            'sobrenome' => 'required',
            'email' => 'required|unique:users,email,'.$this->id.'|min:9',
            'password' => 'required',
            'usuario' => 'required|unique:users',
            'telefone' => 'required|unique:users',

        ];
    }

    public function feedback(){
        return [
            'required' => 'O campo :atribute é obrigatório',
            'email.unique' => 'Já existe esse email',
            'usuario.unique' => 'Já existe esse usuario',
            'telefone.unique' => 'Já existe esse telefone',
            'idCarteira.unique' => 'Já existe esse idCarteira',
            'nBI.unique' => 'Já existe esse nBI',
            'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG ou JPG'
        ];
    }
}
