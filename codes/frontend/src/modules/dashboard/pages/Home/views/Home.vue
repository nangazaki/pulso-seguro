<script>
import { onMounted } from "vue";
import { estatsStore } from "@/store/estatsStore";

import Estatisticas from "../components/Estatisticas.vue";
import PacientesChart from "../components/PacientesChart.vue";
import DoctoresChart from "../components/DoctoresChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Header from "@/components/Header.vue";
import Teste from "../components/Teste.vue";

export default {
  components: {
    Estatisticas,
    PacientesChart,
    DoctoresChart,
    DoughnutChart,
    DefaultLayout,
    Header,
    Teste,
  },
  setup() {
    const Estatisticas = estatsStore();
    const data = [12, 19, 3, 5, 2, 3];
    const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

    onMounted(async () => {
      await Estatisticas.PegarEstatisticas();
    });

    return { data, labels, Estatisticas };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Dashboard" />
      <div class="px-8">
        <Estatisticas />
        <div class="flex gap-8">
          <DoctoresChart />
          <PacientesChart />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
