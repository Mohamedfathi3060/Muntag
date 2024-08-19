<?php

namespace App\Http\Controllers\AuthController;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
//    protected function register(Request $request)
//    {
//        dd(request()->all());
//        $request->validate([
//            'name'=>'required|String|max:255',
//            'email'=>'required|email',
//            'password'=>'required|min:8'
//        ]);
//    }
    public function register() {
        $validator = Validator::make(request()->all(), [
            'name' => 'required|string|max:64',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:8|max:64',
        ]);

        if($validator->fails()){
            return response()->json(
                [
                    "error"=>[
                        "code" => 400,
                        "message" => $validator->errors()
                    ]
                ], 400);
        }

        $user = new User;
        $user->name = request()->name;
        $user->email = request()->email;
        $user->password = bcrypt(request()->password);
        $user->save();

        return response()->json([
            "data"=>$user
        ], 201);
    }
    public function login()
    {
        $credentials = request(['email','password']);

        $user = User::query()->whereEmail($credentials['email'])->first();

        if (!$user || $user->email != $credentials['email'] ){
            return response()->json([
                'error'=>[
                    'message' => 'Email not found'
                ]
            ], 401);
        }
        if (!Hash::check($credentials['password'], $user->password)) {
            return response()->json([
                'error'=>[
                    'message' => 'Wrong Password, try again'
                ]
            ], 401);
        }

//        if (! $token = auth()->attempt($credentials)) {
//            return response()->json([
//                'error'=>[
//                    'message' => 'Unauthorized'
//                ]
//            ], 401);
//        }
        $token = auth()->login($user);
        return $this->respondWithToken($token);
    }
    public function me()
    {
        return response()->json(auth('api')->user());
    }
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(JWTAuth::refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60
        ]);
    }

}
