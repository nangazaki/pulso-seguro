<script>
import { computed, onMounted, reactive } from "vue";

import { authStore } from "@/store/authStore";
import { pacienteStore } from "@/store/pacienteStore";

import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CardPaciente from "../components/CardPaciente.vue";

export default {
  components: { CardPaciente, DefaultLayout, Header, Search },
  setup() {
    const PacienteStore = pacienteStore();

    const state = reactive({ page: 1 });
    const pacientes = computed(() => PacienteStore.pacientes);
    const user = computed(() => authStore().getUser);
    const isAdmin = computed(() => authStore().getIsAdmin);

    onMounted(async () => {
      if (isAdmin.value) {
        await PacienteStore.PegarPacientes(state.page);
        return;
      }

      setTimeout(() => {
        PacienteStore.AdicionarPacientes(user.value.pacientes);
      }, 1000);
    });

    async function nextPage() {
      state.page += 1;
      await PacienteStore.PegarPacientes(state.page);
    }

    async function previousPage() {
      state.page -= 1;
      await PacienteStore.PegarPacientes(state.page);
    }

    function openModal() {
      PacienteStore.openModalPesquisar();
    }

    return {
      pacientes,
      openModal,
      isAdmin,
      user,
      state,
      nextPage,
      previousPage,
    };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Pacientes" />
      <Search />
      <div class="px-8 flex mb-6">
        <div
          class="w-full h-[40px] flex flex-col sm:flex-row gap-4 justify-between"
        >
          <router-link
            to="pacientes/adicionar"
            class="bg-gradient-1-lighter px-4 py-2 flex items-center gap-2 rounded-lg text-white ease-linear hover:bg-gradient-1-darker"
          >
            <i class="ph-bold ph-plus"></i>
            <span>Adicionar Paciente</span>
          </router-link>

          <div class="flex gap-4">
            <div
              @click="openModal"
              class="bg-white flex justify-center items-center rounded-lg w-10 h-full cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              <i class="ph ph-magnifying-glass"></i>
            </div>

            <a
              href="http://localhost:8000/api/dashboard/pacientes/pdf"
              target="_blank"
              download
              class="py-2 px-4 bg-white flex gap-2 justify-center items-center rounded-lg cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              Exportar PDF
              <i class="ph ph-download-simple"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="p-8 mb-20">
        <div class="flex gap-6 flex-wrap">
          <CardPaciente
            v-for="paciente in pacientes"
            :key="paciente.id"
            :paciente="paciente"
          />
        </div>

        <div
          v-if="Number(isAdmin)"
          class="w-full mt-20 flex justify-center gap-1"
        >
          <button
            @click="previousPage"
            class="py-1 px-2 rounded-md bg-neutral-200 cursor-pointer hover:bg-neutral-300"
          >
            Anterior
          </button>
          <button
            :class="`py-1 px-2 rounded-md cursor-pointer hover:bg-neutral-300 ${
              state.page == 1 ? 'bg-neutral-400' : 'bg-neutral-200'
            }`"
          >
            1
          </button>
          <button
            :class="`py-1 px-2 rounded-md cursor-pointer hover:bg-neutral-300 ${
              state.page == 2 ? 'bg-neutral-400' : 'bg-neutral-200'
            }`"
          >
            2
          </button>
          <button
            :class="`py-1 px-2 rounded-md cursor-pointer hover:bg-neutral-300 ${
              state.page == 3 ? 'bg-neutral-400' : 'bg-neutral-200'
            }`"
          >
            3
          </button>
          <button
            :class="`py-1 px-2 rounded-md cursor-pointer hover:bg-neutral-300 ${
              state.page == 4 ? 'bg-neutral-400' : 'bg-neutral-200'
            }`"
          >
            4
          </button>
          <button
            class="py-1 px-2 rounded-md bg-neutral-200 cursor-pointer hover:bg-neutral-300"
          >
            ...
          </button>
          <button
            @click="nextPage"
            class="py-1 px-2 rounded-md bg-neutral-200 cursor-pointer hover:bg-neutral-300"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
