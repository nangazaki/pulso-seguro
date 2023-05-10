<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apontamento extends Model
{
    use HasFactory;
    protected $fillable = ['apontamento', 'user_id'];
    public function pacientes(){

        return $this->belongsTo('App\Models\User');
    }
}
