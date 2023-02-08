<template lang="">
  <div class="bg-background w-full h-screen flex justify-center items-center">
    <div class="bg-branco-claro relative max-w-lg my-0 mx-auto w-full p-10 flex justify-center items-center rounded-2xl card-shadow">
      <form method="POST" @submit.prevent="submit($event)" 
        class="relative max-w-sm w-full"
      >
       
        <div>
          <img src="@/assets/logo-inline-gradient.svg" class="w-1/2 mb-4"/>
          <h1 class="font-montserrat text-2xl">Acesso Restrito</h1>
          <p class="font-nunito">Por favor, preencha os campos com as suas informações de acesso.</p>
        </div>
  
        <div class="w-full mb-3">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets//icon-user.svg">
          </div>
          <input required
            type="email"
            class="relative h-10 w-full py-3 pr-4 pl-11 border border-preto-claro rounded leading-none text-cinza-2 placeholder:text-cinza-3"
            placeholder="E-mail" 
            v-model="form.email" />
        </div>
       
        <div class="w-full mb-4">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets/icon-password.svg">
          </div>
          <input required
            type="password"
            class="relative h-10 w-full py-3 pr-4 pl-11 border border-preto-claro rounded leading-none text-cinza-2 placeholder:text-cinza-3"
            placeholder="Senha" 
            v-model="form.senha"
          />
        </div>
       
        <div class="w-full flex flex-wrap justify-between mb-8">
          <div>
            <input type="checkbox" name="remember" class="mr-2"/>
            <span>Manter-me conectado</span>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        
        <button class="w-full h-10 bg-primaria-claro rounded font-medium text-lg text-branco-claro pointer">
          Entrar
        </button>
      
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: undefined,
        senha: undefined,
      },
    };
  },
  methods: {
    ...mapActions("auth", ["ActionLogin"]),

    async submit() {
      try {
        this.ActionLogin(this.form);
      } catch (err) {
        alert(err)
      }
    },
  },
};
</script>

