<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(User $medico)
    {
        $this->medico = $medico;
    }

    public function index(Request $request)
    {
        $medico = array();
        if ($request->has('atributos')) {
            $atributos = $request->atributos;
            $medico = $this->medico->selectRaw($atributos)->get();
        } else {
            $medico = $this->medico->get();
        }

        if ($request->has('filtro')) {
            $filtros = explode(';', $request->filtro);
            foreach ($filtros as $key => $condicao) {

                $c = explode(':', $condicao);
                $medico = $medico->where($c[0], $c[1], $c[2]);
            }
        }

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
        $imagem_urn = $imagem->store('imagens/medicos', 'public');

        $medico = $this->medico->create([
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'usuario' => $request->usuario,
            'isAdmin' => 0,
            'telefone' => $request->telefone,
            'imagem' => $imagem_urn,
            'especialidade' => $request->especialidade,
            'idCarteira' => $request->idCarteira,
            'dataNascimento' => $request->dataNascimento,
            'genero' => $request->genero,
            'nBI' => $request->nBI,

            'provincia' => $request->provincia,
            'municipio' => $request->municipio,
            'bairro' => $request->bairro,
            'rua' => $request->rua
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
        $medico = $this->medico->with('pacientes')->find($id);
        if ($medico == null) {
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }

        if ($medico['isAdmin'] == 1) {
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }

        return response()->json($medico, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
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
        if ($medico == null) {
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }

        if ($medico['isAdmin'] == 1) {
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }

        if ($request->method() == 'PATCH') {

            $regras = array();

            foreach ($medico->rulesMedico() as $input => $regra) {

                if (array_key_exists($input, $request->all())) {

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $medico->feedback());
        } else {

            $request->validate($medico->rulesMedico(), $medico->feedback());
        }

        if ($request->file('imagem')) {
            Storage::disk('public')->delete($medico->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/medicos', 'public');


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
        $medico = $this->medico->find($id);
        if ($medico == null) {
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        if ($medico['isAdmin'] == 1) {
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        Storage::disk('public')->delete($medico->imagem);

        $medico->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
