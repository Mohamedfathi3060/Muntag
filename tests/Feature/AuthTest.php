<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use \Illuminate\Foundation\Testing;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_register_with_valid_data()
    {
        $response = $this->postJson('api/register',[
            'name'=>'Mohamed Fathi',
            'email'=>'mohamedfathi11117@gmail.com',
            'password'=>'password',
            'password_confirmation'=>'password',
        ]);
        dd($response->json());
    }
}
