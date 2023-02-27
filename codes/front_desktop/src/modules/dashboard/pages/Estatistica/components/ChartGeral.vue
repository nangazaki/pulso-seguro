<template>
  <div class="h-96 w-full bg-branco-claro rounded-lg p-8 card-shadow mb-16">
    <span class="text-primaria-claro font-montserrat">Gráfico de Novos Pacientes</span>
    <Line :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro'],
        datasets: [{
            label: 'Pacientes Novos',
            backgroundColor: 'rgb(28,163,94)',
            data: [40, 30, 70, 55, 60]
        }]
      },
  
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
}
</script>