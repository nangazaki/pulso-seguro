<?php

namespace App\Http\Controllers;

use App\Models\EstadoSaude;
use Illuminate\Http\Request;

class EstadoSaudeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function __construct(Paciente $estadoSaude){
        $this->estadoSaude = $estadoSaude;
    }

    public function index()
    {
        $estadoDeSaude = $this->estadoDeSaude->with('pacientes')->get();
        return response()->json($estadoDeSaude, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $estadoDeSaude = $this->estadoDeSaude->create($request->all());
        return $estadoDeSaude;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EstadoSaude  $estadoSaude
     * @return \Illuminate\Http\Response
     */
    public function show(EstadoSaude $estadoSaude)
    {
        $estadoSaude = $this->estadoSaude->find($id);
        return response()->json($estadoSaude);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstadoSaude  $estadoSaude
     * @return \Illuminate\Http\Response
     */
    public function edit(EstadoSaude $estadoSaude)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EstadoSaude  $estadoSaude
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EstadoSaude $estadoSaude)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EstadoSaude  $estadoSaude
     * @return \Illuminate\Http\Response
     */
    public function destroy(EstadoSaude $estadoSaude)
    {
        $estadoSaude = $this->estadoSaude->find($id);
        if($estadoSaude == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        $estadoSaude->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
