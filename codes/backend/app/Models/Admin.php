<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'sobrenome', 'email', 'password', 'imagem'];

    public function rules(){
        return [
            'nome' => 'required|min:4',
            'sobrenome' => 'required',
            'email' => 'required|unique:admins,email,'.$this->id.'|min:9',
            'password' => 'required',
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
