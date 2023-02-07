<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'sobrenome', 'email', 'telefone', 'password', 'idade', 'genero', 'N_BI', 'bairro', 'N_da_carteira', 'especializacao', 'municipio', 'provincia', 'imagem'];

    public function rules(){
        return [
            'nome' => 'required|min:4',
            'sobrenome' => 'required',
            'email' => 'required|unique:medicos,email,'.$this->id.'|min:9',
            'password' => 'required',
            'telefone' => 'required', 
            'idade' => 'required',
            'genero' => 'required', 
            'N_BI' => 'required|unique:medicos', 
            'bairro' => 'required', 
            'N_da_carteira' => 'required|unique:medicos',
            'especializacao' => 'required',
            'municipio' => 'required',
            'provincia' => 'required',
            'imagem'=> 'required|file|mimes:png,jpg'
        ];
    }

    public function feedback(){
        return [
            'required' => 'O campo :atribute é obrigatório',
            'email.unique' => 'Já existe esse email',
            'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG'
        ];
    }
}
