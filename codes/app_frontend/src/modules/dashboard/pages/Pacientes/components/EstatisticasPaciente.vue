<template>
  <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
    <div class="col-xl-6 mb-5">
      <span class="text-primaria-claro font-montserrat"
        >Pacientes por Genero</span
      >
      <div class="relative flex flex-col items-center">
        <div class="">
          <div class="h-72">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
    <div class="col-xl-6 mb-5">
      <span class="text-primaria-claro font-montserrat">
        Pacientes por Faixa de Idade
      </span>
      <div class="h-72 flex items-center justify-center">
        <div class="w-full">
          <canvas id="myChart2"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { getData } from "@/service";

let myChart;
myChart;

export default {
  async mounted() {
    let data = await this.getStats();

    this.updatePacienteGenero(data);
  },

  setup() {
    let getStats = async () => {
      let res = await getData("estatisticas");

      let estats = res[1];
      estats = Object.entries(estats);

      let data = [];

      let data2 = res[3];

      data.push(estats[1][1]);
      data.push(estats[0][1]);

      return { data, data2 };
    };

    let updatePacienteGenero = (dados) => {
      const ctx = document.getElementById("myChart");

      const labels = ["Homens", "Mulheres"];

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Pacientes por idade",
            data: dados.data,
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
        type: "doughnut",
        data: data,
      });

      const ctx2 = document.getElementById("myChart2");

      const labels2 = ["60-69", "70-79", "80-89", "+90"];

      const data2 = {
        labels: labels2,
        datasets: [
          {
            label: "Pacientes",
            data: dados.data2,
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

      myChart = new Chart(ctx2, {
        type: "bar",
        data: data2,
      });
    };

    return { getStats, updatePacienteGenero };
  },
};
</script>