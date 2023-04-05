<template>
  <div class="w-full h-96 bg-white rounded-xl p-8 shadow-card mb-10">
    <span class="text-primary font-montserrat">
      Gráfico de Novos Pacientes
    </span>
    <div class="w-full h-full flex items-center justify-center">
      <canvas id="myChart" class="w-full"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

let myChart;
myChart;

export default {
  async mounted() {
    // let data = await this.getStats();

    // console.log(data.data);

    this.updatePacienteGenero();
  },

  setup() {
    // let getStats = async () => {
    //   let res = await getData("estatisticas");

    //   let estats = res[0];

    //   console.log(estats);

    //   estats = Object.entries(estats);

    //   console.log(estats);

    //   let data = [[], []];

    //   data[0].push(estats[0][0]);
    //   data[0].push(estats[1][0]);
    //   data[0].push(estats[2][0]);
    //   data[0].push(estats[3][0]);
    //   data[1].push(estats[0][1]);
    //   data[1].push(estats[1][1]);
    //   data[1].push(estats[2][1]);
    //   data[1].push(estats[3][1]);

    //   console.log(data);

    //   return { data };
    // };

    let updatePacienteGenero = () => {
      const ctx = document.getElementById("myChart");

      const labels = ["Dezembro", "Janeiro", "Fevereiro", "Março", "Abril"];

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Pacientes por Mês",
            data: [25, 8, 18, 40, 30],
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

      myChart = new Chart(ctx, {
        type: "line",
        data: data,
      });
    };

    return { updatePacienteGenero };
  },
};
</script>