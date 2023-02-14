<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;
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

 public function rules(){
    return [
        'imagem' => 'required|min:4|file|mimes:png,jpg',
        'name' => 'required',
        'sobrenome' => 'required',
        'email' => 'required|unique:pacientes,email,'.$this->id.'|min:9',
        'password' => 'required',
        'usuario' => 'required|unique:pacientes',
        'telefone' => 'required|unique:pacientes',
        
        'dataNascimento' => 'required',
        'genero' => 'required',
        'nBI' => 'required|unique:pacientes',

        'provincia' => 'required',
        'municipio' => 'required',
        'bairro' => 'required',
        'rua' => 'required'
    ];
}
public function feedback(){
    return [
        'required' => 'O campo :atribute é obrigatório',
        'email.unique' => 'Já existe esse email',
        'usuario.unique' => 'Já existe esse usuario',
        'telefone.unique' => 'Já existe esse telefone',
        'nBI.unique' => 'Já existe esse nBI',
        'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG ou JPG'
    ];
}
}
