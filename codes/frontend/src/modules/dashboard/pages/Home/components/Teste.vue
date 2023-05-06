<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import { onMounted, watchEffect, ref } from "vue";
import Chart from "chart.js/auto";

export default {
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
    chartTitle: {
      type: String,
      default: "",
    },
  },
  setup(props, { refs }) {
    let chart;

    onMounted(() => {
      console.log(refs);
      chart = new Chart(refs.chart, {
        type: "bar",
        data: {
          labels: props.chartLabels,
          datasets: [
            {
              label: props.chartTitle,
              data: props.chartData,
            },
          ],
        },
      });
    });

    watchEffect(() => {
      if (chart) {
        chart.data.datasets[0].data = props.chartData;
        chart.update();
      }
    });
  },
};
</script>
