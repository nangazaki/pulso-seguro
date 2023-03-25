<template>
  <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
    <div class="col-xl-6 mb-5">
      {{ man }} {{ woman }}
      <span class="text-primaria-claro font-montserrat"
        >Pacientes por gênero</span
      >
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
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

export default {
  components: { Doughnut },
  props: {
    dados: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>