<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Chart from "chart.js/auto";
import mqtt from "mqtt/dist/mqtt";

export default {
  setup() {
    const chartRef = ref(null);
    let chartInstance = null;
    let mqttClient = null;

    // Conecta-se ao servidor MQTT e subscreve-se ao tópico "batimentos".
    const connectMQTT = () => {
      mqttClient = mqtt.connect("mqtt://localhost:1883");
      mqttClient.on("connect", () => {
        mqttClient.subscribe("batimentos");
      });
    };

    // Cria o gráfico com o Chart.js.
    const createChart = () => {
      chartInstance = new Chart(chartRef.value, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Batimentos cardíacos",
              data: [],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              suggestedMin: 50,
              suggestedMax: 150,
            },
          },
        },
      });
    };

    // Recebe os dados do servidor MQTT e atualiza o gráfico.
    const updateChart = (message) => {
      const { data, timestamp } = JSON.parse(message);
      chartInstance.data.labels.push(timestamp);
      chartInstance.data.datasets[0].data.push(data);
      chartInstance.update();
    };

    onMounted(() => {
      createChart();
      connectMQTT();
      mqttClient.on("message", (_, message) => {
        updateChart(message.toString());
      });
    });

    onUnmounted(() => {
      mqttClient.end();
      chartInstance.destroy();
    });

    return {
      chartRef,
    };
  },
};
</script>
