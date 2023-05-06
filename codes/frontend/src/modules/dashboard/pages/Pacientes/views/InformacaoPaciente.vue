<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pacienteStore } from "@/store/pacienteStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PacienteSobre from "../components/PacienteSobre.vue";
import PacienteEstado from "../components/PacienteEstado.vue";

export default {
  components: { PacienteSobre, PacienteEstado, DefaultLayout, Header },
  setup() {
    const route = useRoute();
    const PacienteStore = pacienteStore();

    onMounted(async () => {
      await PacienteStore.SelecionarPaciente(route.params.id);
    });

    const paciente = computed(() => PacienteStore.pacienteSelecionado);
    const doctor = computed(() => PacienteStore.doctorPaciente);

    return { paciente, doctor };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Informações do Paciente" />
      <div class="px-8 pb-8 flex gap-8">
        <PacienteSobre :paciente="paciente" :doctor="doctor" />
        <PacienteEstado />
      </div>
    </div>
  </DefaultLayout>
</template>

