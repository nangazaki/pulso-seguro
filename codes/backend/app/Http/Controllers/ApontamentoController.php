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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $apontamento = $this->apontamento->find($id);
        if($apontamento == null){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $apontamento = $this->apontamento->find($id);
        if ($apontamento == null) {
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }
        if ($request->method() == 'PATCH') {

            $regras = array();

            foreach ($apontamento->rules() as $input => $regra) {

                if (array_key_exists($input, $request->all())) {

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $apontamento->feedback());
        } else {

            $request->validate($apontamento->rulesAdmin(), $apontamento->feedback());
        }

        $apontamento->fill($request->all());

        $apontamento->save();

        return response()->json($apontamento, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $apontamento = $this->apontamento->find($id);
        if($apontamento == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        $apontamento->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
