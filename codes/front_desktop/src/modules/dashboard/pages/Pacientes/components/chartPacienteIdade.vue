<template>
  <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
        <div class="col-xl-6 mb-5">
          <span class="text-primaria-claro font-montserrat">Pacientes por idade</span>
          <div class="relative flex flex-col break-words">
            <div class="">
              <div class="h-72">
                <Bar :data="dados" :options="options" />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


export default {
  components: { Bar },
  data(){
    return {
      dados: {
        labels: ['50-59', '60-69', '70-79', '80+'],
        datasets: [
          {
            label: 'Pacientes',
            borderColor: "#1ca35e",
            backgroundColor: 'rgba(28,163,94,0.1)',
            data: [38, 70, 36, 25],
            borderWidth: 2,
            borderRadius: 20,
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
}
</script>
