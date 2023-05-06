<script>
import { computed, onMounted } from "vue";
import { authStore } from "@/store/authStore";

export default {
  setup() {
    const doctor = computed(() => authStore().getUser);

    return { doctor };
  },
};
</script>

<template>
  <section>
    <h2 class="text-primary mb-3">Sobre</h2>
    <div
      class="w-[300px] px-8 py-6 bg-white text-gray-800 rounded-xl shadow-card"
    >
      <div class="mb-6 flex items-center flex-col text-center">
        <div class="w-28 h-28 mb-3 rounded-full overflow-hidden object-cover">
          <img
            :src="`http://localhost:8000/storage/${doctor.imagem}`"
            class="w-full h-full object-cover"
            alt="thumb"
          />
        </div>
        <span class="text-lg mb-0">
          {{ doctor.name }} {{ doctor.sobrenome }}
        </span>
        <span class="block text-gray-600 mb-5">{{ doctor.especialidade }}</span>
        <span class="block text-sm text-gray-600">
          Este é um exemplo de uma pequena descrição do doctor.
        </span>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Informações de contacto
        </span>
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-phone" :class="`text-primary`"></i>
            <p class="text-sm">{{ doctor.telefone }}</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
            <p class="text-sm">{{ doctor.email }}</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-map-pin" :class="`text-primary`"></i>
            <p class="text-sm">
              {{ doctor.provincia }}, {{ doctor.municipio }}
            </p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Informações de pessoais
        </span>
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-fingerprint" :class="`text-primary`"></i>
            <p class="text-sm">
              {{ doctor.nBI }}
            </p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="ph ph-identification-card" :class="`text-primary`"></i>
            <p class="text-sm">{{ doctor.idCarteira }}</p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <span class="text-gray-500 uppercase text-xs mb-4">
          Responsável por
        </span>
        <div class="flex items-center gap-2 mt-2">
          <i class="ph ph-user" :class="`text-primary`"></i>
          <p class="text-sm">10 Pacientes</p>
        </div>
      </div>
    </div>
  </section>
</template>
