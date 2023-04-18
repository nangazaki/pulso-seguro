<script>
import { computed, onMounted } from "vue";

import Chart from "chart.js/auto";
import { estatsStore } from "@/store/estatsStore";

let myChart;
myChart;

export default {
  setup() {
    const Estatisticas = estatsStore();
    const pacientesIdade = computed(() => Estatisticas.pacientesIdade);

    async function iniciarChart() {
      const ctxBar = document.getElementById("bar");

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

      myChart = new Chart(ctxBar, {
        type: "bar",
        data: data,
      });
    }

    onMounted(() => {
      setTimeout(() => {
        iniciarChart();
      }, 2000);
    });

    return { pacientesIdade };
  },
};
</script>

<template>
  <div class="bg-white w-1/2 rounded-lg p-4 shadow-card">
    <div class="col-xl-6 mb-5">
      <span class="text-primary font-montserrat"> Doctores por Genero </span>
      <div class="relative flex flex-col items-center">
        <div class="">
          <div class="h-72">
            <canvas id="bar"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
