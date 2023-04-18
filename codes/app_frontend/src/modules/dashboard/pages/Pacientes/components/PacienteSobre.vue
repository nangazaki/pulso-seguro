<script setup>
import { onMounted } from "vue";

defineProps({
  paciente: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2 class="text-primary mb-3">Sobre</h2>
    <div
      class="w-[300px] px-8 py-6 bg-white text-gray-800 rounded-xl shadow-card"
    >
      <div class="mb-6 flex items-center flex-col">
        <div
          class="w-28 h-28 relative mb-3 rounded-full overflow-hidden object-cover"
        >
          <img
            :src="`http://localhost:8000/storage/${paciente.imagem}`"
            class="w-full h-full object-cover"
            alt="thumb"
          />
        </div>
        <span class="text-lg mb-0">
          {{ paciente.name }} {{ paciente.sobrenome }}
        </span>
        <span class="block text-gray-600">
          Idade
          {{ 2023 - new Date(paciente.dataNascimento).getFullYear() }}
          anos
        </span>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Informações de contacto
        </span>
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-phone" :class="`text-primary`"></i>
            <p class="text-sm">{{ paciente.telefone }}</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
            <p class="text-sm">{{ paciente.email }}</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-map-pin" :class="`text-primary`"></i>
            <p class="text-sm">
              {{ paciente.municipio }}, {{ paciente.bairro }}
            </p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Doctor responsável
        </span>
        <div class="flex items-center gap-2 mt-2">
          <i class="ph ph-stethoscope" :class="`text-primary`"></i>
          <p class="text-sm">Donilson da Costa</p>
        </div>
      </div>
    </div>
  </section>
</template>