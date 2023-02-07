<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <h1 class="mb-8 pl-2 text-2xl text-cinza-1">Lista de Pacientes</h1>

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
      <div class="bg-branco-claro w-1/2 rounded-lg p-4 card-shadow">
        <div class="col-xl-6 mb-5">
          <h2 class="text-primaria-claro font-montserrat">Pacientes por gênero</h2>
          <div class="relative flex flex-col break-words">
            <div class="card-body">
              <div class="h-72">
                <Doughnut :data="dataDoughnut" :options="optionsDoughnut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-8 mb-8">
      
      <div class="bg-branco-claro w-full h-auto rounded-md p-4 card-shadow">
        <div class=" flex justify-between flex-wrap py-4 gap-4">
            <div class="flex-grow">
              <select class="w-20 bg-branco-claro p-2 border border-cinza-4 rounded-md">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="flex items-center flex-wrap gap-4">
              <div>
                <input placeholder="Pesquisar paciente..." type="text"
                  class="border border-cinza-4 rounded-md py-2 px-4 w-56"
                />
              </div>
              <button type="button"
                class=" text-cinza-3 hover:text-cinza-2 bg-cinza-5 hover:bg-cinza-4 px-4 py-2 flex items-center gap-2 rounded-md"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    tag="i"
                    class="
                      v-icon
                      notranslate
                      v-theme--light
                      v-icon--size-default
                      iconify iconify--tabler
                    "
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9M7 20h10m-8-4v4m6-4v4m2-16h4v4m-5 1l5-5"
                    ></path>
                  </svg>
                </span>
                <span data-no-activator=""> Exportar </span>
              </button>

              <router-link to="/lista-pacientes/adicionar-paciente"
                type="button"
                class="bg-primaria-claro px-4 py-2 flex items-center gap-2 rounded-md text-branco-claro">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"  
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v14m-7-7h14"
                    ></path>
                  </svg>
                </span>
                <span>
                  Adicionar Paciente
                </span>
              </router-link>
            </div>
          </div>
        <table class="w-full whitespace-nowrap">
          <thead class="border-b border-cinza-2 text-cinza-1">
            <th class="text-left py-3 px-2">Nome completo</th>
            <th class="text-left py-3 px-2">Morada</th>
            <th class="text-left py-3 px-2">Acções</th>
          </thead>
          <tbody>
            <PacienteItem v-for="paciente in pacientsList" :key="paciente.id" :paciente="paciente" />
          </tbody>
          <tfoot>
            <tr>
              <td colspan="7" class="py-2">
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm text-gray-500">
                      Mostrando de
                      <span class="font-medium">1</span>
                      a
                      <span class="font-medium">10</span>
                      de
                      <span class="font-medium">20</span>
                      resultados
                    </p>
                  </div>
                  <div>
                    <nav class="relative z-0 inline-flex gap-1 rounded-md card-shadow -space-x-px">
                      <a href="#"
                        class="relative inline-flex items-center px-2 rounded-md text-sm font-medium text-cinza-3 bg-cinza-5"
                      >
                        <span class="sr-only">Anterior</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </a>
                      <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                      <a
                        href="#"
                        class="z-10 bg-cinza-4 text-cinza-2 relative rounded-md inline-flex items-center px-3 py-1 text-sm"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        class="z-10 bg-cinza-5 text-cinza-3 relative rounded-md inline-flex items-center px-3 py-1 text-sm"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        class="relative inline-flex items-center px-2 rounded-md text-sm font-medium text-cinza-3 bg-cinza-5"
                      >
                        <span class="sr-only">Próximo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </main>
</template>
  
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import PacienteItem from "../components/PacienteItem.vue";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Doughnut, Bar } from "vue-chartjs"
import * as chartConfig from '../../chartJS/chartConfig'
import { mapActions, mapState } from "vuex";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

export default {
  data() {
    return {
      ...chartConfig,
    };
  },
  components: { NavbarComp, HeaderComp, PacienteItem, Doughnut, Bar },
  mounted() {
    this.ActionSetPacientsList()
  },
  computed: {
    ...mapState('pacientes', ['pacientsList'])
  },
  methods: {
    ...mapActions('pacientes', ['ActionSetPacientsList'])
  },
};
</script>