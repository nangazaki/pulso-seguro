<template>
    <NavbarComp />
    <main class="h-screen w-full p-8 overflow-auto">
      <HeaderComp />
  
      <span class="pl-2 text-2xl text-cinza-1">
        <span class="text-cinza-3">
          <router-link to="/medicos">Lista de Médicos</router-link> >
        </span>
        <span>
          Adicionar Médico
        </span>
      </span>
      
      <div
        class="flex gap-8 my-8"
      >
       
      </div>
    </main>
  </template>
  
  <script>
  import api from "@/service/api";
  import NavbarComp from "@/components/NavbarComp.vue";
  import HeaderComp from "@/components/HeaderComp.vue";
  
  export default {
    data() {
      return {
        isVisible: true,
        medico: {
          nomeCompleto: "",
          bilhete: "",
          genero: "",
          idade: "",
          email: "",
          tel: "",
          municipio: "",
          bairro: "",
          rua: "",
        },
      };
    },
    components: { NavbarComp, HeaderComp },
    methods: {
      adicionarMedico() {
        api.post("/add-medico", {});
      },
      fecharMenu() {
        this.isVisible = false;
        this.$router.back();
      },
    },
  };
  </script>