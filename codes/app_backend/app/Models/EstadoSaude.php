<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoSaude extends Model
{
    use HasFactory;

    protected $fillable = ['temperatura', 'batcardiaco', 'paciente_id'];

    public function pacientes(){

        return $this->belongsTo('App\Models\Paciente');
    }
}
