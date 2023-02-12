<!-- eslint-disable vue/no-parsing-error -->
<template lang="">
  <div class="bg-background w-full h-screen flex justify-center items-center">
    <div class="bg-branco-claro relative max-w-lg my-0 mx-auto w-full p-10 flex justify-center items-center rounded-2xl card-shadow">
      
      <Form @submit="onSubmit" :validation-schema='schema' class="relative max-w-sm w-full">
        <div class="mb-2">
          <img src="@/assets/logo-inline-gradient.svg" class="w-1/2 mb-2"/>
          <h1 class="font-montserrat text-2xl">Acesso Restrito</h1>
          <p class="font-nunito">Por favor, preencha os campos com as suas informações de acesso.</p>
        </div>
  
        <div class="form-control">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets//icon-user.svg">
          </div>
          <Field name="email" type="email" class="email-style" :rules="email" />
          <ErrorMessage name="email" />
        </div>
       
        <div class="form-control">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets/icon-password.svg">
          </div>
          <Field name="password" type="password" class="email-style" :rules="password" />
          <ErrorMessage name="password" />
        </div>
       
        <div class="w-full flex flex-wrap justify-between mb-8 mt-3">
          <div>
            <input type="checkbox" name="remember" class="mr-2"/>
            <span>Manter-me conectado</span>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        
        <button class="w-full h-10 bg-primaria-claro rounded font-medium text-lg text-branco-claro pointer">
          Entrar
        </button>
      
      </Form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from 'yup';

export default {
  data() {
    return {
      schema: yup.object({
        email: yup.string('Ooops! O seu email é inválido').required('O campo Email é obrigatório *').email('Ooops! O seu email é inválido'),
        password: yup.string().required('O campo Palavra-passe é obrigatório *').min(6, 'A Senha não pode ter menos de 6 letras'),
      }),
    };
  },
  
  components: { Form, Field, ErrorMessage },
  
  methods: {
    ...mapActions("auth", ["ActionLogin"]),
    
    async onSubmit(values) {
      try { 
        this.ActionLogin(values)
        this.$router.push('dashboard') 
      } catch(err) {
        alert(err)
      }
    },
  },
};
</script>
