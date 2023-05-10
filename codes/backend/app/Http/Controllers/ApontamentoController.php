<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apontamento;

class ApontamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function __construct(Apontamento $apontamento){
        $this->apontamento = $apontamento;
    }

    public function index()
    {
        $apontamento = $this->apontamento->get();
        return response()->json($apontamento, 200);
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
        $apontamento = $this->apontamento->create($request->all());
        return response()->json($apontamento);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EstadoSaude  $apontamento
     * @return \Illuminate\Http\Response
     */
    public function show(Apontamento $apontamento)
    {
        $apontamento = $this->apontamento->find($id);
        return response()->json($apontamento);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Apontamento  $apontamento
     * @return \Illuminate\Http\Response
     */
    public function edit(Apontamento $apontamento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Apontamento  $apontamento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Apontamento $apontamento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Apontamento  $apontamento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Apontamento $apontamento)
    {
        $apontamento = $this->apontamento->find($id);
        if($apontamento == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        $apontamento->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
