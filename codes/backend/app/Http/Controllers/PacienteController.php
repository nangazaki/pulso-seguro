<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Paciente;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Paciente $paciente){
        $this->paciente = $paciente;
    }

    public function index()
    {
        $paciente = $this->paciente->all();
        return response()->json($paciente, 200);
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
        $request->validate($this->paciente->rules(), $this->paciente->feedback());
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        $paciente = $this->paciente->create([
            'nome' => $request->nome, 
            'sobrenome' => $request->sobrenome, 
            'email' => $request->email, 
            'telefone' => $request->telefone, 
            'password' => $request->password, 
            'idade' => $request->idade, 
            'genero' => $request->genero, 
            'N_BI' => $request->N_BI, 
            'bairro' => $request->bairro,   
            'municipio' => $request->municipio, 
            'provincia' => $request->provincia,
            'medico_id' => $request->medico_id, 
            'imagem' => $imagem_urn
        ]);
        return response()->json($paciente);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $paciente = $this->paciente->find($id);
        if($paciente == null){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }
        return response()->json($paciente, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return \Illuminate\Http\Response
     */
    public function edit(Paciente $paciente)
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
        $paciente = $this->paciente->find($id);
        if($paciente == null){
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }

        if($request->method() == 'PATCH'){

            $regras = array();

            foreach($paciente->rules() as $input => $regra){

                if(array_key_exists($input, $request->all())){

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $paciente->feedback());
        }else{

            $request->validate($medico->rules(), $paciente->feedback());

        }

        if($request->file('imagem')){
            Storage::disk('public')->delete($paciente->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        
        $paciente->update([
            'nome' => $request->nome, 
            'sobrenome' => $request->sobrenome, 
            'email' => $request->email, 
            'telefone' => $request->telefone, 
            'password' => $request->password, 
            'idade' => $request->idade, 
            'genero' => $request->genero, 
            'N_BI' => $request->N_BI, 
            'bairro' => $request->bairro,   
            'municipio' => $request->municipio, 
            'provincia' => $request->provincia, 
            'medico_id' => $request->medico_id, 
            'imagem' => $imagem_urn
        ]);
        return response()->json($paciente, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $paciente = $this->paciente->find($id);
        if($paciente == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        Storage::disk('public')->delete($paciente->imagem);

        $paciente->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
