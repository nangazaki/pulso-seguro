<script setup>
import * as yup from 'yup'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { login } from '@/helpers'

const schema = yup.object(login)

return {
  schema
}

</script>

<template>
  <div class="bg-background w-full h-screen flex justify-center items-center">
    <div class="bg-branco-claro relative max-w-lg my-0 mx-auto w-full p-10 
      flex justify-center items-center rounded-2xl card-shadow"
    >
      <Form @submit="onSubmit" :validation-schema="schema"
        class="relative max-w-sm w-full"
      >
        <div class="mb-2">
          <img src="@/assets/logo-inline-gradient.svg" class="w-1/2 mb-2" />
          <h1 class="font-montserrat text-2xl">Acesso Restrito</h1>
          <p class="font-nunito">
            Por favor, preencha os campos com as suas informações de acesso.
          </p>
        </div>

        <div class="form-control">
          <div class="z-10 relative w-4 h-4 top-[30px] left-4">
            <img src="@/assets//icon-user.svg" />
          </div>
          <Field name="usuario" type="text" 
            placeholder="Nome do usuario"
            class="pl-11 appearance-none block w-full bg-gray-100 text-gray-700 
              border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white focus:border-gray-500" id="grid-last-name"
          />
          <ErrorMessage name="usuario" />
        </div>

        <div class="form-control">
          <div class="z-10 relative w-4 h-4 top-[30px] left-4">
            <img src="@/assets/icon-password.svg" />
          </div>
          <Field name="password" type="password"
            placeholder="Senha"
            class="pl-11 appearance-none block w-full bg-gray-100 text-gray-700 
              border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white focus:border-gray-500" id="grid-last-name"
          />
          <ErrorMessage name="password" />
        </div>

        <div class="w-full flex flex-wrap justify-between mb-8 mt-3">
          <div>
            <input type="checkbox" name="remember" class="mr-2" />
            <span>Manter-me conectado</span>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button class="w-full h-10 bg-primaria-claro rounded 
          text-lg text-branco-claro pointer"
        >
          Entrar
        </button>
      </Form>
    </div>
  </div>
</template>
