<script>
import { computed, onMounted, onUnmounted } from "vue";

import Chart from "chart.js/auto";
import { estatsStore } from "@/store/estatsStore";

let myChart;
myChart;

export default {
  setup() {
    const Estatisticas = estatsStore();
    const doctoresGenero = computed(() => Estatisticas.doctoresGenero);

    async function iniciarChart() {
      const doughnut = document.getElementById("doughnut");

      const data = {
        labels: ["Homens", "Mulheres"],
        datasets: [
          {
            label: "Doctores",
            data: await doctoresGenero.value,
            borderColor: ["#1ca35e", "#64e564"],
            backgroundColor: ["rgba(28,163,94,0.1)", "rgba(100,229,100,0.1)"],
            borderWidth: 2,
            tension: 0,
            options: {
              reponsive: true,
              maintainAspectRatio: false,
            },
          },
        ],
      };

      myChart = new Chart(doughnut, {
        type: "doughnut",
        data: data,
      });
    }

    onMounted(async () => {
      await iniciarChart();
    });

    onUnmounted(() => {
      myChart.destroy();
    });

    return { doctoresGenero };
  },
};
</script>

<template>
  <div v-if="doctoresGenero" class="bg-white w-1/2 rounded-xl p-4 shadow-card">
    <div class="col-xl-6 mb-5">
      <span class="text-primary font-montserrat"> Doctores por Gênero </span>
      <div class="flex flex-col items-center">
        <div class="h-72">
          <canvas id="doughnut"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
