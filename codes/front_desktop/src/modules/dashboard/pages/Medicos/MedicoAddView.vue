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
      <form
        type="post"
        @submit.prevent="adicionarMedico($event)"
        class="w-full"
      >
        <div class="bg-branco-claro w-full h-auto rounded-lg p-4 shadow-sm mb-8">
          <span class="text-lg block mb-4">Informações pessoais</span>
          <div class="mb-3">
            <input
              type="text"
              v-model="medico.nomeCompleto"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md text-base"
              placeholder="Nome Completo"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              v-model="medico.bilhete"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              id=""
              placeholder="Nº BI"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              v-model="medico.genero"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="Gênero"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              v-model="medico.idade"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="Idade"
            />
          </div>
        </div>
        <div class="bg-branco-claro w-full h-auto rounded-lg p-4 shadow-sm mb-8">
          <span class="text-lg block mb-4">Informações de contacto</span>
          <div class="mb-3">
            <input
              type="email"
              v-model="medico.email"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-3">
            <input
              type="tel"
              v-model="medico.tel"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="Telefone"
            />
          </div>
          <div class="mb-3">
            <span class="text-base block mb-3">Morada</span>
            <input
              type="text"
              v-model="medico.municipio"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Municipio"
            />
            <input
              type="text"
              v-model="medico.bairro"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Bairro"
            />
            <input
              type="text"
              v-model="medico.rua"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Rua"
            />
          </div>
        </div>
        <div class="bg-branco-claro w-full h-auto rounded-lg p-4 shadow-sm mb-8">
          <span class="text-lg block mb-4">Informações de acesso</span>
          <div class="mb-3">
            <input
              type="email"
              v-model="medico.email"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-3">
            <input
              type="tel"
              v-model="medico.tel"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md"
              placeholder="Telefone"
            />
          </div>
          <div class="mb-3">
            <span class="text-base block mb-3">Morada</span>
            <input
              type="text"
              v-model="medico.municipio"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Municipio"
            />
            <input
              type="text"
              v-model="medico.bairro"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Bairro"
            />
            <input
              type="text"
              v-model="medico.rua"
              class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
              placeholder="Rua"
            />
          </div>
        </div>
        <div>
          <button
            class="
              px-4
              py-2
              bg-primaria-normal
              text-branco-claro
              rounded-md
              mr-4
            "
          >
            Adicionar
          </button>
          <button
            class="px-4 py-2 bg-cinza-5 text-cinza-3 rounded-md mr-4"
            @click="fecharMenu"
          >
            Cancelar
          </button>
        </div>
      </form>
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