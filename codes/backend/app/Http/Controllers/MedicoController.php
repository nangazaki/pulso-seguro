<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Medico;
use Illuminate\Http\Request;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Medico $medico){
        $this->medico = $medico;
    }

    public function index()
    {
        $medico = $this->medico->all();
        return response()->json($medico, 200);
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
        $request->validate($this->medico->rules(), $this->medico->feedback());
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        $medico = $this->medico->create([
            'nome' => $request->nome, 
            'sobrenome' => $request->sobrenome, 
            'email' => $request->email, 
            'telefone' => $request->telefone, 
            'password' => $request->password, 
            'idade' => $request->idade, 
            'genero' => $request->genero, 
            'N_BI' => $request->N_BI, 
            'bairro' => $request->bairro, 
            'N_da_carteira' => $request->N_da_carteira, 
            'especializacao' => $request->especializacao, 
            'municipio' => $request->municipio, 
            'provincia' => $request->provincia,  
            'imagem' => $imagem_urn
        ]);
        return response()->json($medico);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $medico = $this->medico->find($id);
        if($medico == null){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }
        return response()->json($medico, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function edit(Medico $medico)
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
        $medico = $this->medico->find($id);
        if($medico == null){
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }

        if($request->method() == 'PATCH'){

            $regras = array();

            foreach($medico->rules() as $input => $regra){

                if(array_key_exists($input, $request->all())){

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $medico->feedback());
        }else{

            $request->validate($medico->rules(), $medico->feedback());

        }

        if($request->file('imagem')){
            Storage::disk('public')->delete($medico->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        
        $medico->update([
            'nome' => $request->nome, 
            'sobrenome' => $request->sobrenome, 
            'email' => $request->email, 
            'telefone' => $request->telefone, 
            'password' => $request->password, 
            'idade' => $request->idade, 
            'genero' => $request->genero, 
            'N_BI' => $request->N_BI, 
            'bairro' => $request->bairro, 
            'N_da_carteira' => $request->N_da_carteira, 
            'especializacao' => $request->especializacao, 
            'municipio' => $request->municipio, 
            'provincia' => $request->provincia,  
            'imagem' => $imagem_urn
        ]);
        return response()->json($medico, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $medico = $this->medico->find($id);
        if($medico == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        Storage::disk('public')->delete($medico->imagem);

        $medico->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
