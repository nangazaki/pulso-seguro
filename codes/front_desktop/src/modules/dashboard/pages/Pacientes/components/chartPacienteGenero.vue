<template>
  <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
    <div class="col-xl-6 mb-5">
      <span class="text-primaria-claro font-montserrat">Pacientes por gênero</span>
      <div class="relative flex flex-col break-words">
        <div class="">
          <div class="h-72">
            <Doughnut :data="dados" :options="options" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, CategoryScale, Tooltip, Legend } from 'chart.js'
import { Doughnut } from "vue-chartjs";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend)

export default {
  data() {
    return {
      dados: {
        labels: ['Homens', 'Mulheres'],
        datasets: [
          {
            label: '',
            borderColor: ["#1ca35e", "#64e564"],
            backgroundColor: ['rgba(28,163,94,0.1)', 'rgba(100,229,100,0.1)'],
            borderWidth: 2,
            data: [44, 25],
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  components: { Doughnut },
};
</script>