<?php

namespace App\Http\Controllers;

use App\Models\EstadoDeSaude;
use Illuminate\Http\Request;

class EstadoDeSaudeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(EstadoDeSaude $estadoDeSaude){
        $this->estadoDeSaude = $estadoDeSaude;
    }

    public function index()
    {
        $estadoDeSaude = $this->estadoDeSaude->create($request->all());
        return response()->json($estadoDeSaude, 200);
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
        $estadoDeSaude = $this->estadoDeSaude->create($request->all());
        return $estadoDeSaude;
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $estadoDeSaude = $this->estadoDeSaude->find($id);
        return $estadoDeSaude;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstadoDeSaude  $estadoDeSaude
     * @return \Illuminate\Http\Response
     */
    public function edit(EstadoDeSaude $estadoDeSaude)
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
        $estadoDeSaude = $this->estadoDeSaude->find($id);
        $estadoDeSaude->update($request->all());

        return $estadoDeSaude;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $estadoDeSaude = $this->estadoDeSaude->find($id);
        if($estadoDeSaude == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        $estadoDeSaude->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
