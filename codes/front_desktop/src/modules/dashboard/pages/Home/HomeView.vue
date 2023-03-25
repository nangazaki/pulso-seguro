<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <div class="flex gap-8 mb-8">
      <div
        v-for="(estat, i) in titles"
        :key="i"
        class="bg-branco-claro w-1/3 h-auto rounded-lg p-4 card-shadow transition ease-linear duration-500 hover:shadow-xl"
      >
        <h2 class="text-primaria-claro font-montserrat mb-4">
          Total de {{ estat.title }}
        </h2>
        <span class="font-montserrat block text-3xl">{{ values[i] }}</span>
      </div>
    </div>
    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
        <div class="col-xl-6 mb-5">
          <h2 class="text-primaria-claro font-montserrat">
            Pacientes por idade
          </h2>
          <div class="card">
            <div class="card-body">
              <div class="h-72">
                <Bar :data="dataBar" :options="optionsBar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow"></div>
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
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "../chartJS/chartConfig";
import { getData } from "@/service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default {
  data() {
    return {
      ...chartConfig,
      values: [],
      titles: [
        { id: 1, title: "Usuarios", key: "Total" },
        { id: 1, title: "Pacientes", key: "Pacientes" },
        { id: 1, title: "Doctores", key: "Medicos" },
      ],
      medicoTotal: null,
    };
  },
  components: { NavbarComp, HeaderComp, Bar },
  mounted() {
    this.getStats();
  },
  methods: {
    async getStats() {
      let res = await getData("estatisticas");

      let pacient = res[4];
      pacient = Object.entries(pacient);

      let doctor = res[5];
      doctor = Object.entries(doctor);

      let total = res[6];
      total = Object.entries(total);

      this.values.push(total[0][1] - 1);
      this.values.push(pacient[0][1]);
      this.values.push(doctor[0][1]);
    },
  },
};
</script>