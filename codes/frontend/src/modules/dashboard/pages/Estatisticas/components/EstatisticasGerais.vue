<script>
import { computed, onMounted, onUnmounted } from "vue";

import Chart from "chart.js/auto";
import { estatsStore } from "@/store/estatsStore";

let myChart;
myChart;

export default {
  setup() {
    const adicionados = computed(() => estatsStore().getAdicionados);

    const addValues = Object.values(adicionados.value[0]);

    async function iniciarChart() {
      const line = document.getElementById("line");

      const data = {
        labels: ["Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
          {
            label: "Pacientes Adicionados",
            data: await addValues,
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

      myChart = new Chart(line, {
        type: "line",
        data: data,
      });
    }

    onMounted(async () => {
      await iniciarChart();
    });

    onUnmounted(() => {
      myChart.destroy();
    });

    return { addValues };
  },
};
</script>

<template>
  <div class="bg-white w-2/3 rounded-xl p-4 shadow-card">
    <div class="col-xl-6 mb-5">
      <span class="text-primary font-montserrat"> Pacientes Adicionados </span>
      <div class="flex flex-col items-center">
        <div class="h-72">
          <canvas class="!w-full !h-full" id="line"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
