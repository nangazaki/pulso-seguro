<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pacienteStore } from "@/store/pacienteStore";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PacienteSobre from "../components/PacienteSobre.vue";
import PacienteEstado from "../components/PacienteEstado.vue";

export default {
  components: { PacienteSobre, PacienteEstado, DefaultLayout },
  setup() {
    const route = useRoute();
    const PacienteStore = pacienteStore();

    onMounted(async () => {
      await PacienteStore.SelecionarPaciente(route.params.id);
    });

    const paciente = computed(() => PacienteStore.pacienteSelecionado);

    return { paciente };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Informações do Paciente</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
      <div class="px-8 pb-8 flex gap-8">
        <PacienteSobre :paciente="paciente" />
        <PacienteEstado />
      </div>
    </div>
  </DefaultLayout>
</template>

