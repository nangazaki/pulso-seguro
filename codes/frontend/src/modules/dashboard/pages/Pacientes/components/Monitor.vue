<script>
import { onMounted, onUnmounted, reactive } from "vue";
import { useRoute } from "vue-router";

import Chart from "chart.js/auto";

let myChart;
myChart;

export default {
  setup() {
    const route = useRoute();
    const state = reactive({ dados: [] });

    const client = mqtt.connect("wss://io.adafruit.com", {
      username: "ClaudioCanga",
      password: "aio_MZxg82KiRS0x01N8XT0CRq8NTI2U",
    });

    client.on("connect", () => {
      console.log("Conectado ao Adafruit IO");
      client.subscribe(`ClaudioCanga/feeds/bpm${route.params.id}`);
    });

    client.on("message", (topic, message) => {
      const dados = JSON.parse(message.toString());
      addDadosNoChart(dados);
    });

    function addDadosNoChart(data) {
      myChart.update();
      state.dados = [...state.dados, data];
      myChart.data.labels.push("BPM");
      console.log(state.dados);
      myChart.update();
    }

    // Iniciar Chart
    async function iniciarChart() {
      const line = document.getElementById("line");

      const data = {
        labels: [],
        datasets: [
          {
            label: "BPM",
            data: state.dados,
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

    onMounted(() => {
      setTimeout(async () => {
        await iniciarChart();
      }, 1500);
    });

    onUnmounted(() => {
      myChart.destroy();
    });

    return {};
  },
};
</script>

<template>
  <div class="bg-white w-full rounded-xl p-4 shadow-card">
    <div class="col-xl-6 mb-5">
      <div class="flex flex-col items-center">
        <div class="h-72">
          <canvas class="!w-full !h-full" id="line"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
