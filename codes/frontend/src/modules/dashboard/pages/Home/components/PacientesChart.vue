<script>
import { computed, onMounted, onUnmounted } from "vue";

import Chart from "chart.js/auto";
import { estatsStore } from "@/store/estatsStore";

export default {
  setup() {
    let myBarChart;
    const Estatisticas = estatsStore();
    const pacientesIdade = computed(() => Estatisticas.pacientesIdade);

    async function iniciarChart() {
      const ctxBar = document.getElementById("chart-bar").getContext("2d");

      const data = {
        labels: ["60-69", "70-79", "80-89", "+90"],
        datasets: [
          {
            label: "Pacientes",
            data: await pacientesIdade.value,
            borderColor: ["#1ca35e", "#64e564"],
            backgroundColor: ["rgba(28,163,94,0.1)", "rgba(100,229,100,0.1)"],
            borderWidth: 2,
            borderRadius: 50,
            tension: 0,
            options: {
              reponsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
        ],
      };

      myBarChart = new Chart(ctxBar, {
        type: "bar",
        data: data,
      });
    }

    onMounted(() => {
      setTimeout(async () => {
        await iniciarChart();
      }, 1500);
    });

    onUnmounted(() => {
      myBarChart.destroy();
    });
  },
};
</script>

<template>
  <div class="bg-white w-1/2 rounded-xl p-4 shadow-card">
    <div class="col-xl-6 mb-5">
      <span class="text-primary font-montserrat">
        Pacientes por Faixa Etária
      </span>
      <div class="relative flex flex-col items-center">
        <div class="h-72">
          <canvas class="!w-full !h-full" id="chart-bar"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
