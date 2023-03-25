<template>
  <div class="flex justify-between">
    <div class="flex gap-6">
      <div class="w-12 rounded-full overflow-hidden">
        <img :src="`http://localhost:8000/storage/${paciente.imagem}`" alt="">
      </div>
      <div>
        <p class="text-cinza-1">{{ paciente.name }} {{ paciente.sobrenome }}</p>
        <p class="text-sm text-cinza-3">{{ paciente.telefone }}</p>
      </div>
    </div>
    <button class="rounded-md px-4 border border-primaria-claro text-primaria-claro transition duration-300 hover:bg-primaria-claro hover:text-white">
      <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}`">Ver perfil do paciente</router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    paciente: {
      type: Object,
      required: true
    }
  }
}
</script>


