<script>
import { computed, onMounted } from "vue";
import { estatsStore } from "@/store/estatsStore";

import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";

import Estatisticas from "../components/Estatisticas.vue";
import PacientesChart from "../components/PacientesChart.vue";
import DoctoresChart from "../components/DoctoresChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";

export default {
  components: {
    Navbar,
    Estatisticas,
    PacientesChart,
    DoctoresChart,
    Footer,
    DoughnutChart,
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
  <div class="layout">
    <Navbar />
    <main class="overflow-y-scroll flex flex-col justify-between">
      <div class="container xl:mx-auto mb-20">
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
      <Footer />
    </main>
  </div>
</template>
