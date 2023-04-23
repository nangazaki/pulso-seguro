<script>
import { computed, onMounted } from "vue";
import { estatsStore } from "@/store/estatsStore";

import Estatisticas from "../components/Estatisticas.vue";
import PacientesChart from "../components/PacientesChart.vue";
import DoctoresChart from "../components/DoctoresChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: {
    Estatisticas,
    PacientesChart,
    DoctoresChart,
    DoughnutChart,
    DefaultLayout,
  },
  setup() {
    const Estatisticas = estatsStore();

    onMounted(async () => {
      await Estatisticas.PegarEstatisticas();
    });

    const chartData = {
      title: "My Doughnut Chart",
      labels: ["Homens", "Mulheres"],
      values: [1, 2],
      colors: "#999999",
    };

    return { chartData, Estatisticas };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Dashboard</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
      <div class="px-8">
        <Estatisticas />
        <div class="flex gap-8">
          <DoctoresChart />
          <PacientesChart />
          <!-- <DoughnutChart :chart-data="chartData" /> -->
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
