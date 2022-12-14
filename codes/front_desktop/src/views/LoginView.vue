<template lang="">
  <div class="root">
    <div class="container-login">
      <form method="POST" class="" @submit.prevent="submit($event)">
       
        <div>
          <img src="../assets/logo-inline-gradient.svg" class="img"/>
          <h1 class="">Acesso Restrito</h1>
          <p>Por favor, preencha os campos com as suas informações de acesso.</p>
        </div>
  
        <div class="form-username">
          <div class="icon">
            <img src="../assets/icon-user.svg">
          </div>
          <input required
            type="email"
            class=""
            placeholder="E-mail" 
            v-model="email" />
          <span class="">{{emailValido}}</span>
        </div>
       
        <div class="form-password">
          <div class="icon">
            <img src="../assets/icon-password.svg">
          </div>
          <input required
            type="password"
            placeholder="Senha" 
            v-model="senha"
          />
        </div>
       
        <div class="form-footer">
          <div>
            <input type="checkbox" name="remember" />
            <span>Manter-me conectado</span>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        
        <button class="">
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
      email: undefined,
      senha: undefined,
      emailValido: "",
    };
  },
  methods: {
    submit(e) {
      api.post("/login", {
        email: this.email,
        senha: this.senha,
      }).then;
      console.log(this.validarEmail(this.email));
      e;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/partials/login";
</style>
