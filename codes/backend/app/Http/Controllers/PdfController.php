<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Paciente;
use PDF;

class PdfController extends Controller
{
  public function pdf_paciente()
  {
    $paciente = Paciente::all();
    $medico = User::all();

    $pdf = PDF::loadView('pdf_paciente', compact('paciente', 'medico'));

    return $pdf->setPaper('a4')->stream('Todos Pacintes');
  }

  public function pdf_doctor()
  {
    $medico = User::all();

    $pdf = PDF::loadView('pdf_doctor', compact('medico'));

    return $pdf->setPaper('a4')->stream('Todos Medicos');
  }
}
