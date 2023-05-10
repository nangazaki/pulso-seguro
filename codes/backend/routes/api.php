<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('jwt.auth')->group(function () {
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
});
Route::post('me', 'App\Http\Controllers\AuthController@me');
Route::apiresource('admins', 'App\Http\Controllers\AdminController');
Route::apiresource('medicos', 'App\Http\Controllers\MedicoController');
Route::apiresource('pacientes', 'App\Http\Controllers\PacienteController');
Route::apiresource('diagnosticos', 'App\Http\Controllers\EstadoDeSaudeController');
Route::get('estatisticas', 'App\Http\Controllers\StatisticsController@Estatisticas');

Route::apiresource('apontamentos', 'App\Http\Controllers\ApontamentoController');
Route::get('pdfPaciente', 'App\Http\Controllers\PdfController@pdf_paciente');
Route::get('pdfDoctores', 'App\Http\Controllers\PdfController@pdf_doctor');


Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
