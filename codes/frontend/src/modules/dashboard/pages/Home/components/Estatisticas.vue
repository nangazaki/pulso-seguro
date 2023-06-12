<script>
import { computed } from "vue";
import { estatsStore } from "@/store/estatsStore";

export default {
  setup() {
    const Estatisticas = estatsStore();

    const pacientes = computed(() => Estatisticas.estatisticas[4]);
    const doctores = computed(() => Estatisticas.estatisticas[5]);
    const total = computed(() => Estatisticas.estatisticas[6]);

    return { pacientes, doctores, total };
  },
};
</script>

<template>
  <div class="w-full flex gap-8 mb-8">
    <div
      class="bg-white w-1/3 h-auto rounded-xl p-4 shadow-card transition ease-linear duration-500 hover:shadow-xl"
    >
      <h2 class="text-primary font-montserrat mb-4">
        Pessoas Cadastradas no Sistema
      </h2>
      <span class="font-montserrat block text-3xl">{{ total - 1 }}</span>
    </div>
    <div
      class="bg-white w-1/3 h-auto rounded-xl p-4 shadow-card transition ease-linear duration-500 hover:shadow-xl"
    >
      <h2 class="text-primary font-montserrat mb-4">Total de Doctores</h2>
      <span class="font-montserrat block text-3xl">{{ doctores }}</span>
    </div>
    <div
      class="bg-white w-1/3 h-auto rounded-xl p-4 shadow-card transition ease-linear duration-500 hover:shadow-xl"
    >
      <h2 class="text-primary font-montserrat mb-4">Total de Pacientes</h2>
      <span class="font-montserrat block text-3xl">{{ pacientes }}</span>
    </div>
  </div>
</template>