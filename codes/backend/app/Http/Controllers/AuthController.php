<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['usuario', 'password']);

        if ($token = auth()->guard('paciente-api')->attempt($credentials))
            return response()->json(['token' => $token, 'users'=>auth()->guard('paciente-api')->user()]);

        if ($token = auth()->guard('user-api')->attempt($credentials))
            return response()->json(['token' => $token, 'users'=>auth()->guard('user-api')->user()]);    
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout()
    {
        auth('paciente-api')->logout();
        return response()->json(['saíste...']);
        
    }

    public function me()
    {
        if (auth()->guard('paciente-api')->user())
            return response()->json(auth()->guard('paciente-api')->user());
        else{
                if (auth()->guard('user-api')->user())
                    return response()->json(auth()->guard('user-api')->user());
            }
    }

    public function refresh()
    {
        $token = auth('paciente-api')->refresh();
        return response()->json(['token' => $token]);
    }
}
