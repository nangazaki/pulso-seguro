<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'sobrenome',
        'usuario',
        'telefone',
        'especialidade',
        'idCarteira',
        'dataNascimento',
        'genero',
        'nBI',
        'imagem',

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

    public function rulesAdmin()
    {
        return [
            'name' => 'required|min:4',
            'sobrenome' => 'required',
            'email' => 'required|unique:users,email,' . $this->id . '|min:9',
            'password' => 'required',
            'usuario' => 'required|unique:users',
            'telefone' => 'required|unique:users',
            'imagem' => 'required|file|mimes:png,jpg'
        ];
    }

    public function rulesMedico()
    {
        return [
            'name' => 'required|min:4',
            'sobrenome' => 'required',
            'email' => 'required|unique:users,email,' . $this->id . '|min:6',
            'password' => 'required|min:4',
            'usuario' => 'required|unique:users,usuario,' . $this->id . '|min:5',
            'telefone' => 'required|unique:users,telefone,' . $this->id . '|min:9|max:9',
            'imagem' => 'required|file|mimes:png,jpg',
            'especialidade' => 'required',
            'idCarteira' => 'required|unique:users,idCarteira,' . $this->id . '|min:4',
            'dataNascimento' => 'required',
            'genero' => 'required',
            'nBI' => 'required|unique:users,nBI,' . $this->id . '|min:7',
            'provincia' => 'required',
            'municipio' => 'required',
            'bairro' => 'required',
            'rua' => 'required'
        ];
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :atribute é obrigatório',
            'usuario.unique' => 'Já existe esse usuário',
            'telefone.unique' => 'Já existe esse telefone',
            'email.unique' => 'Já existe esse email',
            'nBI.unique' => 'Já existe esse bBI',
            'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG ou JPG'
        ];
    }

    public function pacientes()
    {

        return $this->hasMany('App\Models\Paciente');
    }
}
