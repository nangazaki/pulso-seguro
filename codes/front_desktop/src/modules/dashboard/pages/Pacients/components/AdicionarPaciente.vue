<template>
  <div
    :class="`${
      this.isVisible ? 'fixed w-full h-full bg-[#22222228]' : 'hidden'
    }`"
  >
    <form
      type="post"
      @submit.prevent="adicionarPaciente($event)"
      class="absolute w-[450px] bg-branco-claro p-8 top-0 right-0 shadow-xl"
    >
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-xl">Adicionar Paciente</h4>
        <button
          class="
            bg-cinza-5
            text-cinza-3
            relative
            rounded-md
            inline-flex
            items-center
            px-1
            py-1
            text-sm
          "
          @click="fecharMenu"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light iconify iconify--tabler"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="font-size: 18px; height: 18px; width: 18px"
            >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6L6 18M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="w-full">
        <span class="text-base block mb-4">Informações pessoais</span>
        <div class="mb-3">
          <input
            type="text"
            v-model="paciente.nomeCompleto"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md text-base"
            placeholder="Nome Completo"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="paciente.bilhete"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md"
            id=""
            placeholder="Nº BI"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="paciente.genero"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md"
            placeholder="Gênero"
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            v-model="paciente.idade"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md"
            placeholder="Idade"
          />
        </div>
      </div>
      <div class="mb-3">
        <span class="text-base block mb-4">Informações de contacto</span>
        <div class="mb-3">
          <input
            type="email"
            v-model="paciente.email"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md"
            placeholder="E-mail"
          />
        </div>
        <div class="mb-3">
          <input
            type="tel"
            v-model="paciente.tel"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md"
            placeholder="Telefone"
          />
        </div>
        <div class="mb-3">
          <span class="text-base block mb-3">Morada</span>
          <input
            type="text"
            v-model="paciente.municipio"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
            placeholder="Municipio"
          />
          <input
            type="text"
            v-model="paciente.bairro"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
            placeholder="Bairro"
          />
          <input
            type="text"
            v-model="paciente.rua"
            class="w-full h-8 p-2 border border-cinza-4 rounded-md mb-4"
            placeholder="Rua"
          />
        </div>
      </div>
      <div>
        <button
          class="px-4 py-2 bg-primaria-normal text-branco-claro rounded-md mr-4"
        >
          Adicionar
        </button>
        <button class="px-4 py-2 bg-cinza-5 text-cinza-3 rounded-md mr-4" @click="fecharMenu">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  data() {
    return {
      isVisible: true,
      paciente: {
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
  methods: {
    adicionarPaciente() {
      api.post("/paciente", {});
    },
    fecharMenu() {
      this.isVisible = false
      this.$router.back()
    }
  },
};
</script>