<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { pacienteStore } from "@/store/pacienteStore";

export default {
  setup() {
    const router = useRouter();
    const PacienteStore = pacienteStore();

    const modalDelete = computed(() => PacienteStore.getModalDelete);

    function fecharModal() {
      PacienteStore.cancelPacienteDelete();
    }

    async function deletePaciente() {
      await PacienteStore.pacienteDelete()
        .then(() => {
          console.log("");
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return { modalDelete, fecharModal, deletePaciente };
  },
};
</script>

<template>
  <div
    v-if="modalDelete.visible"
    class="w-full h-screen absolute right-0 top-0 bg-[#000000b3] backdrop-blur-[2px] flex items-center justify-center transition ease-in"
  >
    <div
      class="modal-enter w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 flex items-center text-red-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-2xl text-gray-700 font-semibold py-4">
            Eliminar Paciente!
          </h3>
          <p class="text-gray-500 px-8">
            Tens a certeza que queres eliminar o<br />
            Paciente
            <strong>
              {{ modalDelete.paciente.name }}
              {{ modalDelete.paciente.sobrenome }}
            </strong>
            ?
          </p>
        </div>
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            @click="fecharModal"
            class="bg-white px-6 py-2 text-md shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            @click="deletePaciente"
            class="bg-red-500 border border-red-500 px-6 py-2 text-md shadow-sm font-medium tracking-wider text-white rounded-md hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

