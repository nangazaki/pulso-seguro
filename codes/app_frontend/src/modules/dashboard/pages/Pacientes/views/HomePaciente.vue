<script>
import { computed, onMounted } from "vue";

// import { authStore } from "@/store/authStore";
import { pacienteStore } from "@/store/pacienteStore";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CardPaciente from "../components/CardPaciente.vue";
import DeletePaciente from "../components/DeletePaciente.vue";

export default {
  components: { DeletePaciente, CardPaciente, DefaultLayout },
  setup() {
    // const AuthStore = authStore();
    const PacienteStore = pacienteStore();
    const pacientes = computed(() => PacienteStore.pacientes);

    onMounted(async () => {
      // await AuthStore.RefreshSession();
      await PacienteStore.PegarPacientes();
    });

    return { pacientes };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <DeletePaciente />
      <header class="p-8">
        <span class="text-sm text-gray-500">Pacientes</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
      </header>
      <div class="px-8 flex gap-8">
        <div class="w-full h-[40px] flex justify-between">
          <router-link
            to="/dashboard/pacientes/adicionar"
            class="bg-gradient-1-lighter px-4 py-2 flex items-center gap-2 rounded-lg text-white ease-linear hover:bg-gradient-1-darker"
          >
            <i class="ph-bold ph-plus"></i>
            <span>Adicionar Paciente</span>
          </router-link>

          <div class="flex gap-4">
            <div
              class="bg-white flex justify-center items-center rounded-lg w-10 h-full cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              <i class="ph ph-magnifying-glass"></i>
            </div>

            <button
              class="py-2 px-4 bg-white flex gap-2 justify-center items-center rounded-lg cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              Exportar PDF
              <i class="ph ph-download-simple"></i>
            </button>

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
      <div class="w-full p-8 mx-auto mb-20">
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
