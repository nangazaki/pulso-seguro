<template lang="">
  <div class="bg-branco-normal w-full h-screen flex justify-center items-center">
    <div class="bg-branco-claro relative max-w-lg my-0 mx-auto w-full p-10 flex justify-center items-center rounded-2xl shadow-xl">
      <form method="POST" @submit.prevent="submit($event)" 
        class="relative max-w-sm w-full"
      >
       
        <div>
          <img src="@/assets/logo-inline-gradient.svg" class="w-1/2 mb-4"/>
          <h1 class="text-2xl font-semibold">Acesso Restrito</h1>
          <p>Por favor, preencha os campos com as suas informações de acesso.</p>
        </div>
  
        <div class="w-full mb-3">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets//icon-user.svg">
          </div>
          <input required
            type="email"
            class="relative h-10 w-full py-3 pr-4 pl-11 border border-preto-claro rounded leading-none text-cinza-2 placeholder:text-cinza-3"
            placeholder="E-mail" 
            v-model="usuario.email" />
          <span class="">{{this.emailValido}}</span>
        </div>
       
        <div class="w-full mb-4">
          <div class="z-10 relative w-4 h-4 top-7 left-4">
            <img src="@/assets/icon-password.svg">
          </div>
          <input required
            type="password"
            class="relative h-10 w-full py-3 pr-4 pl-11 border border-preto-claro rounded leading-none text-cinza-2 placeholder:text-cinza-3"
            placeholder="Senha" 
            v-model="usuario.senha"
          />
        </div>
       
        <div class="w-full flex flex-wrap justify-between mb-8">
          <div>
            <input type="checkbox" name="remember" class="mr-2"/>
            <span>Manter-me conectado</span>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        
        <button class="w-full h-10 bg-primaria-normal rounded font-medium text-lg text-branco-claro pointer">
          Entrar
        </button>
      
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  data() {
    return {
      usuario: {
        email: undefined,
        senha: undefined,
        emailValido: ",",
      },
    };
  },

  methods: {
    async submit() {
      console.log(this.usuario.email, this.usuario.senha);
      await api
        .post("/login", {
          email: this.usuario.email,
          senha: this.usuario.senha,
        })
        .then(
          /* Validar o email */

          /* Redireccionar para a Home do Dashboard */
          this.$router.push("/dashboard")
        )
        .catch(
          /* Tratar os erros */

        );
    },
  },
};
</script>

