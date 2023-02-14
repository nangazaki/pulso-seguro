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
    public function __construct(EstadoSaude $estadoSaude){
        $this->estadoSaude = $estadoSaude;
    }

    public function index()
    {
        $estadoSaude = $this->estadoSaude->with('pacientes')->get();
        return response()->json($estadoSaude, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $estadoSaude = $this->estadoSaude->create($request->all());
        return response()->json($estadoSaude);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $estadoSaude = $this->estadoSaude->find($id);
        return response()->json($estadoSaude);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstadoSaude  $estadoDeSaude
     * @return \Illuminate\Http\Response
     */
    public function edit(EstadoDeSaude $estadoSaude)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $estadoSaude = $this->estadoSaude->find($id);
        $estadoSaude->update($request->all());

        return response()->json($estadoSaude);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $estadoSaude = $this->estadoSaude->find($id);
        if($estadoSaude == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        $estadoSaude->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
