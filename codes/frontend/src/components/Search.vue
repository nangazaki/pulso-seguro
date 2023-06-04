<script>
import { computed, onMounted, reactive } from "vue";
import { doctorStore } from "@/store/doctorStore";
import { pacienteStore } from "@/store/pacienteStore";
import { search_doctores } from "@/services/index";
import { search_pacientes } from "@/services/index";

export default {
  props: {
    def: {
      type: String,
      default: "Paciente",
    },
  },
  setup(props) {
    const DoctorStore = doctorStore();
    const PacienteStore = pacienteStore();
    const state = reactive({
      input: null,
      result: null,
      isVisible: null,
      showResult: false,
    });

    if (props.def === "Doctor") {
      state.isVisible = computed(() => DoctorStore.getPesquisarDoctors);
    } else {
      state.isVisible = computed(() => PacienteStore.getPesquisarPacientes);
    }

    function closeModal() {
      if (props.def === "Doctor") {
        DoctorStore.closeModalPesquisar();
        return;
      }

      PacienteStore.closeModalPesquisar();
    }

    async function Pesquisar() {
      if (props.def === "Doctor") {
        state.result = await search_doctores(state.input);
        state.showResult = true;
        return;
      }

      state.result = await search_pacientes(state.input);
      state.showResult = true;
    }

    return { Pesquisar, closeModal, state };
  },
};
</script>

<template>
  <div
    v-show="state.isVisible"
    class="w-full h-screen fixed right-0 top-0 bg-[#000000b3] flex justify-center transition ease-in py-16"
  >
    <div class="p-6 max-w-[840px] w-full flex gap-4 modal-enter">
      <div class="bg-white w-full overflow-hidden h-96 rounded-2xl">
        <div class="px-4 py-6 w-full border-b">
          <form @submit.prevent="Pesquisar" class="flex items-center">
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <i
                  class="ph ph-stethoscope"
                  :class="`text-xl text-neutral-900`"
                ></i>
              </div>
              <input
                type="text"
                v-model="state.input"
                class="pl-10 text-sm appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-lg py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Pesquisar por doctores"
                required
              />
            </div>
            <button
              type="submit"
              class="inline-flex gap-1 items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gradient-1-lighter rounded-lg hover:bg-gradient-1-darker focus:outline-none"
            >
              <i
                class="ph ph-magnifying-glass"
                :class="`text-base text-gray-50`"
              ></i>
              Pesquisar
            </button>
          </form>
        </div>
        <div class="px-4 py-6 w-full">
          <div v-if="state.showResult" class="w-full">
            <div class="flex justify-between">
              <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    :src="`http://localhost:8000/storage/${state.result.imagem}`"
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <p class="text-cinza-1">
                    {{ state.result.name }} {{ state.result.sobrenome }}
                  </p>
                  <p class="text-sm text-cinza-3">
                    {{ state.result.telefone }}
                  </p>
                </div>
              </div>
              <router-link :to="`/dashboard/pacientes/${state.result.id}/info`">
                <button
                  class="rounded-md px-4 py-2 border border-primary text-primary transition duration-300 hover:bg-gradient-1-lighter hover:text-white"
                >
                  Ver perfil do paciente
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        @click="closeModal"
        class="bg-white w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:text-gradient-1-lighter"
      >
        <i class="ph ph-x"></i>
      </div>
    </div>
  </div>
</template>