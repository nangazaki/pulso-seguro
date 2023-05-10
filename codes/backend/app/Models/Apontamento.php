<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apontamento extends Model
{
    use HasFactory;
    protected $fillable = ['apontamento', 'user_id'];

    public function rules()
    {
        return [
            'apontamento' => 'required|min:7',
            'user_id' => 'required'
            
        ];
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :atribute é obrigatório',
        ];
    }

    public function pacientes(){

        return $this->belongsTo('App\Models\User');
    }
}
