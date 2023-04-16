<script setup>
defineProps({
  paciente: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-[360px] h-auto flex flex-col bg-white rounded-xl overflow-hidden shadow-card"
  >
    <router-link :to="`/dashboard/pacientes/${paciente.id}/info`">
      <img
        :src="`http://localhost:8000/storage/${paciente.imagem}`"
        class="w-full h-60 object-cover"
        alt="card image"
      />
    </router-link>
    <div class="p-6">
      <span class="font-montserrat text-gray-500 uppercase text-xs mb-4">
        Informações do Paciente
      </span>

      <div class="">
        <div class="mb-6">
          <router-link
            :to="`/dashboard/pacientes/${paciente.id}/info`"
            class="font-montserrat text-gray-800 text-lg text-primaria-claro"
          >
            {{ paciente.name }} {{ paciente.sobrenome }}
          </router-link>

          <div class="mt-2">
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-phone" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-gray-700">{{ paciente.telefone }}</div>
            </div>

            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-gray-700">{{ paciente.email }}</div>
            </div>
          </div>
        </div>
        <div class="mt-4 flex flex-col items-center justify-center">
          <div class="w-full flex justify-center gap-3 mb-3">
            <router-link
              :to="`/dashboard/pacientes/${paciente.id}/editar`"
              class="w-[40%] flex items-center justify-center gap-2 bg-white px-2 py-[6px] border border-gray-500 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              Editar
              <i class="ph ph-note-pencil" :class="`text-lg`"></i>
            </router-link>

            <button
              title="Eliminar"
              class="w-[40%] flex items-center justify-center gap-2 rounded-lg border border-red-500 py-[6px] px-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              Eliminar
              <i class="ph ph-trash" :class="`text-lg`"></i>
            </button>
          </div>

          <router-link
            :to="`/dashboard/pacientes/${paciente.id}/info`"
            :class="`w-[calc(80%+16px)] flex items-center justify-center gap-2 border border-gradient-1-lighter text-gradient-1-lighter nunito rounded-lg py-[6px] transition duration-300 hover:bg-gradient-1-darker hover:text-white`"
          >
            Ver perfil
            <i class="ph ph-user" :class="`text-lg`"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
