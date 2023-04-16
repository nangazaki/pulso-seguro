<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

    public function index(Request $request)
    {
        $paciente = array();

        if($request->has('filtro')){
            $filtros = explode(';', $request->filtro);
            foreach($filtros as $key => $condicao){

                $c = explode(':', $condicao);
                $paciente = $paciente->where($c[0], $c[1], $c[2]);

            }    

        }

        if($request->has('atributos')){
            $atributos = $request->atributos;
            $paciente = $this->paciente->selectRaw($atributos)->with('estadoSaude')->get();    

        }else{
            $paciente = $this->paciente->with('estadoSaude')->get();

        }

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
        $imagem_urn = $imagem->store('imagens/pacientes', 'public');

        $paciente = $this->paciente->create([
            'name' => $request->name, 
            'sobrenome' => $request->sobrenome, 
            'email' => $request->email, 
            'password' => bcrypt($request->password),
            'usuario' => $request->usuario,
            'telefone' => $request->telefone,
            'imagem' => $imagem_urn,
            'dataNascimento' => $request->dataNascimento,
            'genero' => $request->genero,
            'nBI' => $request->nBI,
            'user_id' => $request->user_id,

            'provincia' => $request->provincia,
            'municipio' => $request->municipio,
            'bairro' => $request->bairro,
            'rua' => $request->rua
        ]);


        return response()->json($paciente);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $paciente = $this->paciente->with('estadoSaude')->find($id);
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
     * @param  int  $id
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

            $request->validate($paciente->rules(), $paciente->feedback());

        }

        if($request->file('imagem')){
            Storage::disk('public')->delete($paciente->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/pacientes', 'public');

        
        $paciente->fill($request->all());
        $paciente->imagem = $imagem_urn;
        $paciente->save();

        return response()->json($paciente, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
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
