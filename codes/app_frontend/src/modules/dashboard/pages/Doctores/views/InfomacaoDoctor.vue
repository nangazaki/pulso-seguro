<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doctorStore } from "@/store/doctorStore";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DoctorSobre from "../components/DoctorSobre.vue";
import Paciente from "../components/Paciente.vue";

export default {
  components: { DefaultLayout, DoctorSobre, Paciente },
  setup() {
    const route = useRoute();
    const DoctorStore = doctorStore();

    const doctor = computed(() => DoctorStore.getDoctor);
    const pacientes = computed(
      () => DoctorStore.getPacientesDoDoctorSelecionado
    );

    onMounted(() => {
      DoctorStore.SelecionarDoctor(route.params.id);
    });

    return { doctor, pacientes };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Perfil Doctor</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
      </header>
      <div class="px-8 pb-8 flex gap-6">
        <DoctorSobre />
        <div class="w-full">
          <h2 class="text-primary mb-3">Pacientes</h2>
          <div class="w-full p-8 bg-white rounded-xl shadow-card">
            <div class="flex flex-col gap-4">
              <div v-if="pacientes">
                <Paciente
                  v-for="paciente in pacientes"
                  :key="paciente.id"
                  :paciente="paciente"
                />
              </div>
              <div v-else>
                <p>
                  O(A) doctor(a) {{ doctor.name }} não possui nenhum paciente
                  cadastrado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

