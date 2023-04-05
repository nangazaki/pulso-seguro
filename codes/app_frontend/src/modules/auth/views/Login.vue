<script>
import * as yup from "yup";
import { login } from "@/helpers";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage },
  setup() {
    const schema = yup.object(login);

    function onSubmit(values) {
      alert(Object.entries(values));
    }

    return {
      schema,
      onSubmit,
    };
  },
};
</script>

<template>
  <div class="bg-background w-full h-screen flex justify-center items-center">
    <div
      class="bg-white relative max-w-lg my-0 mx-auto w-full p-10 flex justify-center items-center rounded-2xl shadow-card"
    >
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        class="relative max-w-sm w-full"
      >
        <div class="mb-2">
          <img src="@/assets/logo-inline-gradient.svg" class="w-1/2 mb-2" />
          <h1 class="font-montserrat text-2xl">Acesso Restrito</h1>
          <p class="font-nunito">
            Por favor, preencha os campos com as suas informações de acesso.
          </p>
        </div>

        <div class="w-full h-auto">
          <div class="block z-10 relative w-4 h-4 top-[30px] left-4 text-base">
            <i class="ph ph-user"></i>
          </div>
          <Field
            name="usuario"
            type="text"
            class="pl-11 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Nome do usuario"
          />
          <ErrorMessage name="usuario" class="pl-4 text-sm text-red-500" />
        </div>

        <div class="w-full h-auto">
          <div class="block z-10 relative w-4 h-4 top-[30px] left-4 text-base">
            <i class="ph ph-lock"></i>
          </div>
          <Field
            name="password"
            type="password"
            class="pl-11 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Palavra-passe"
          />
          <ErrorMessage name="password" class="pl-4 text-sm text-red-500" />
        </div>

        <div class="w-full flex flex-wrap justify-between mb-8 mt-5 font-base">
          <div>
            <input type="checkbox" name="remember" class="mr-2" />
            <span>Manter-me conectado</span>
          </div>
          <a href="#" class="hover:text-primary">Esqueceu a senha?</a>
        </div>

        <button
          class="w-full py-2 text-white font-medium text-lg bg-gradient-1-lighter hover:bg-gradient-1-darker transition ease-linear duration-300 rounded pointer"
        >
          Entrar
        </button>
      </Form>
    </div>
  </div>
</template>
