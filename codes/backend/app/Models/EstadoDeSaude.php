<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoDeSaude extends Model
{
    use HasFactory;
    protected $fillable = ['temperatura', 'batcardiaco', 'paciente_id'];
}
