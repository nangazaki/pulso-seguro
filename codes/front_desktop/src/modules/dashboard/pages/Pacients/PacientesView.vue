<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <h1 class="mb-8 pl-2 text-2xl text-cinza-1">Lista de Pacientes</h1>

    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
      <div class="bg-branco-claro w-1/3 h-56 rounded-lg p-4 shadow-sm"></div>
    </div>

    <div class="flex gap-8 mb-8">
      <div class="bg-branco-claro w-full h-auto rounded-md p-4 shadow-sm">
        <table class="w-full whitespace-nowrap">
          <thead class="border-b border-cinza-2 text-cinza-1">
            <th class="text-left py-3 px-2">Nome completo</th>
            <th class="text-left py-3 px-2">Morada</th>
            <th class="text-left py-3 px-2">Acções</th>
          </thead>
          <tbody>
            <PacienteItem
              v-for="paciente in dados"
              :key="paciente.id"
              :paciente="paciente"
            />
          </tbody>
          <tfoot>
            <tr>
              <td colspan="7" class="py-2">
                <div
                  class="
                    hidden
                    sm:flex-1 sm:flex sm:items-center sm:justify-between
                  "
                >
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
                    <nav
                      class="
                        relative
                        z-0
                        inline-flex
                        gap-1
                        rounded-md
                        shadow-sm
                        -space-x-px
                      "
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        class="
                          relative
                          inline-flex
                          items-center
                          px-2
                          rounded-md
                          text-sm
                          font-medium
                          text-cinza-3
                          bg-cinza-5
                        "
                      >
                        <span class="sr-only">Anterior</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
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
                        aria-current="page"
                        class="
                          z-10
                          bg-cinza-4
                          text-cinza-2
                          relative
                          rounded-md
                          inline-flex
                          items-center
                          px-3
                          py-1
                          text-sm
                        "
                      >
                        1
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        class="
                          z-10
                          bg-cinza-5
                          text-cinza-3
                          relative
                          rounded-md
                          inline-flex
                          items-center
                          px-3
                          py-1
                          text-sm
                        "
                      >
                        2
                      </a>
                      <a
                        href="#"
                        class="
                          relative
                          inline-flex
                          items-center
                          px-2
                          rounded-md
                          text-sm
                          font-medium
                          text-cinza-3
                          bg-cinza-5
                        "
                      >
                        <span class="sr-only">Próximo</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
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
  <AdicionarPaciente />
</template>
  
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import PacienteItem from "./components/PacienteItem.vue";
import AdicionarPaciente from "./components/AdicionarPaciente.vue";

export default {
  data() {
    return {
      dados: [
        {
          id: 0,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/6.jpg",
          nome: "Cláudio Eduardo",
          email: "claudioeduardo@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 1,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg",
          nome: "Helder Cambuta",
          email: "heldercambuta@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 2,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/23.jpg",
          nome: "Eduardo Salvador",
          email: "eduardosalvador@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 3,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/11.jpg",
          nome: "Edson Pitra",
          email: "edsonpitra@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 4,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/3.jpg",
          nome: "Julião José",
          email: "juliaojose@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 5,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/5.jpg",
          nome: "João Pedro",
          email: "joaopedro@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 6,
          img: "https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg",
          nome: "Salamaca Fonseca",
          email: "salamacafonseca@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 7,
          img: "https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg",
          nome: "Mauro Sumuca",
          email: "maurosumuca@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 8,
          img: "https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg",
          nome: "Tatiana José",
          email: "tatianajose@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
        {
          id: 9,
          img: "https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg",
          nome: "Edna Gaspar",
          email: "ednagaspar@pulsoseguro.com",
          cargo: "Cardiologista",
          estado: "Em actividade",
        },
      ],
    };
  },
  components: { NavbarComp, HeaderComp, PacienteItem, AdicionarPaciente },
};
</script>