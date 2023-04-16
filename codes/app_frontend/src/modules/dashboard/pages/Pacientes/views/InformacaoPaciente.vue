<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pacienteStore } from "../store";

import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import PacienteSobre from "../components/PacienteSobre.vue";
import PacienteEstado from "../components/PacienteEstado.vue";

export default {
  components: { Navbar, Footer, PacienteSobre, PacienteEstado },
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
  <Navbar />
  <main class="overflow-y-scroll flex flex-col justify-between">
    <div class="max-w-[1500px] desktop:mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Informações do Paciente</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
      <div class="px-8 pb-8 flex gap-8">
        <PacienteSobre :paciente="paciente" />
        <PacienteEstado />
      </div>
    </div>
    <Footer />
  </main>
</template>

