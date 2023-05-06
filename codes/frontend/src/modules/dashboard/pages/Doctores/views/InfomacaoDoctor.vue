<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doctorStore } from "@/store/doctorStore";

import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DoctorSobre from "../components/DoctorSobre.vue";
import Paciente from "../components/Paciente.vue";

export default {
  components: { Header, DefaultLayout, DoctorSobre, Paciente },
  setup() {
    const route = useRoute();
    const DoctorStore = doctorStore();

    onMounted(async () => {
      await DoctorStore.SelecionarDoctor(route.params.id);
    });

    const doctor = computed(async () => await DoctorStore.getDoctor);
    const pacientes = computed(
      () => DoctorStore.getPacientesDoDoctorSelecionado
    );

    console.log(pacientes.value);

    return { doctor, pacientes };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Perfil Doctor" />
      <div class="px-8 pb-8 flex gap-6">
        <DoctorSobre />
        <div class="w-full">
          <h2 class="text-primary mb-3">Pacientes</h2>
          <div class="w-full p-8 bg-white rounded-xl shadow-card">
            <div>
              <div class="flex flex-col gap-4">
                <Paciente
                  v-for="paciente in pacientes"
                  :key="paciente.id"
                  :paciente="paciente"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

