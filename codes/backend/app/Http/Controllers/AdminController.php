<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(User $admin){
        $this->admin = $admin;
    }

    public function index()
    {
        $admin = $this->admin->all();
        $admin = $admin->where('isAdmin', 1);
        return response()->json($admin, 200);
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
        $request->validate($this->admin->rulesAdmin(), $this->admin->feedback());
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/admins', 'public');

        $admin = $this->admin->create([
            'imagem' => $imagem_urn,
            'name' => $request->name,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'password' => $request->password,
            'usuario' => $request->usuario,
            'telefone' => $request->telefone,

            'isAdmin' => 1
        ]);
        return response()->json($admin);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $admin = $this->admin->find($id);
        if($admin == null){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }
        if($admin['isAdmin'] == 0){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);
        }
        return response()->json($admin, 200);
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
        $admin = $this->admin->find($id);
        if($admin == null){
            return response()->json(['erro' => 'impossível realizar a actualização. recurso não encontrado'], 404);
        }
        if($admin['isAdmin'] == 0){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);

        }

        if($request->method() == 'PATCH'){

            $regras = array();

            foreach($admin->rulesAdmin() as $input => $regra){

                if(array_key_exists($input, $request->all())){

                    $regras[$input] = $regra;
                }
            }

            $request->validate($regras, $admin->feedback());
        }else{

            $request->validate($admin->rulesAdmin(), $admin->feedback());

        }

        if($request->file('imagem')){
            Storage::disk('public')->delete($admin->imagem);
        }

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/admins', 'public');

        
        $admin->fill($request->all());
        $admin->imagem = $imagem_urn;
        $admin->save();

        return response()->json($admin, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin = $this->admin->find($id);
        if($admin == null){
            return response()->json(['erro' => 'não existe o recurso que se pretende excluir'], 404);
        }

        if($admin['isAdmin'] == 0){
            return response()->json(['erro' => 'recurso pesquisado não existe'], 404);

        }

        Storage::disk('public')->delete($admin->imagem);

        $admin->delete();
        return response()->json(['recurso excluido com sucesso']);
    }
}
