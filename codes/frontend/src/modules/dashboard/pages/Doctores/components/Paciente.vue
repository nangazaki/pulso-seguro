<template>
  <div class="flex justify-between">
    <div class="flex gap-6">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img
          :src="`http://localhost:8000/storage/${paciente.imagem}`"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div>
        <p class="text-cinza-1">{{ paciente.name }} {{ paciente.sobrenome }}</p>
        <p class="text-sm text-cinza-3">{{ paciente.telefone }}</p>
      </div>
    </div>
    <router-link :to="`/dashboard/pacientes/${paciente.id}/info`">
      <button
        class="rounded-md px-4 py-2 border border-primary text-primary transition duration-300 hover:bg-gradient-1-lighter hover:text-white"
      >
        Ver perfil do paciente
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    paciente: {
      type: Object,
      required: true,
    },
  },
};
</script>

