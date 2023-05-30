<script>
import { computed, onMounted } from "vue";

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

    const pacientes = computed(() => PacienteStore.pacientes);
    const user = computed(() => authStore().getUser);
    const isAdmin = computed(() => authStore().getIsAdmin);

    onMounted(async () => {
      if (isAdmin.value) {
        await PacienteStore.PegarPacientes();
        return;
      }

      PacienteStore.AdicionarPacientes(user.value.pacientes);
    });

    function openModal() {
      PacienteStore.openModalPesquisar();
    }

    return { pacientes, openModal, isAdmin, user };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Pacientes" />
      <Search />
      <div class="px-8 flex gap-8">
        <div class="w-full h-[40px] flex justify-between">
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

            <select class="w-20 h-full bg-white p-2 rounded-md shadow-card">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
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
      </div>
    </div>
  </DefaultLayout>
</template>
