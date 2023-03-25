<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Paciente extends Authenticatable implements JWTSubject
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
        'dataNascimento',
        'genero',
        'nBI',
        'imagem',
        'user_id',
    
        'provincia',
        'municipio',
        'bairro',
        'rua',
        
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

    public function rules(){
        return [
            'name' => 'required|min:4',
            'sobrenome' => 'required',
            'email' => 'required|unique:pacientes,email,'.$this->id.'|min:6',
            'password' => 'required|min:4',
            'usuario' => 'required|unique:pacientes|min:5',
            'telefone' => 'required|unique:pacientes|min:9|max:9',
            'imagem' => 'required|file|mimes:png,jpg',
            'dataNascimento' => 'required',
            'genero' => 'required',
            'nBI' => 'required|unique:pacientes|min:7',
            'provincia' => 'required',
            'municipio' => 'required',
            'bairro' => 'required',
            'rua' => 'required'
        ];
    }
    
    public function feedback(){
        return [
            'required' => 'O campo :atribute é obrigatório',
            'usuario.unique' => 'Já existe esse usuário',
            'telefone.unique' => 'Já existe esse telefone',
            'email.unique' => 'Já existe esse email',
            'nBI.unique' => 'Já existe esse bBI',
            'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG ou JPG'
        ];
    }
    
    public function estadoSaude(){
    
        return $this->hasMany('App\Models\EstadoSaude');
    }

    public function medicos(){

        return $this->belongsTo('App\Models\User');
    }
    
}

