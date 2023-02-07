<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
        <div class="col-xl-6 mb-5">
          <h2 class="text-primaria-claro font-montserrat">Pacientes por idade</h2>
          <div class="card">
            <div class="card-body">
              <div class="h-72">
                <Bar :data="dataBar" :options="optionsBar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-branco-claro w-1/2 h-80 rounded-lg p-4 card-shadow"></div>
    </div>

    <div class="flex gap-8">
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 card-shadow"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 card-shadow"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 card-shadow"></div>
    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from "vue-chartjs"
import * as chartConfig from '../chartJS/chartConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)


export default {
  data() {
    return {
      ...chartConfig,
      }
  },
  components: { NavbarComp, HeaderComp, Bar},
};
</script>