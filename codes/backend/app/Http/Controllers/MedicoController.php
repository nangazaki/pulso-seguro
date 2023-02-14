<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(User $medico){
        $this->medico = $medico;

    }
        
    public function index()
    {
        $medico = $this->medico->all();
        $medico = $medico->where('isAdmin', 0);
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
        $request->validate($this->medico->rulesMedico(), $this->medico->feedback());
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        $medico = $this->medico->create([
            'imagem' => $imagem_urn,
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'password' => $request->password,
            'usuario' => $request->usuario,
            'telefone' => $request->telefone,
            
            'especialidade' => $request->especialidade,
            'idCarteira' => $request->idCarteira,
            'dataNascimento' => $request->dataNascimento,
            'genero' => $request->genero,
            'nBI' => $request->nBI,

            'provincia' => $request->provincia,
            'municipio' => $request->municipio,
            'bairro' => $request->bairro,
            'rua' => $request->rua,

            'isAdmin' => 0
        ]);
        return response()->json($medico);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $medico = $this->medico->find($id);
        if($medico == null){
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }

        if($medico['isAdmin'] == 1){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }

        if($request->method() == 'PATCH'){

            $regras = array();

            foreach($medico->rulesMedico() as $input => $regra){

                if(array_key_exists($input, $request->all())){

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $medico->feedback());
        }else{

            $request->validate($medico->rulesMedico(), $medico->feedback());

        }

        if($request->file('imagem')){
            Storage::disk('public')->delete($medico->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');

        
        $medico->fill($request->all());
        $medico->imagem = $imagem_urn;
        $medico->save();

        return response()->json($medico, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
