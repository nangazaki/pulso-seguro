<template>
  <tr class="border-b border-cinza-4">
    <td class="flex items-center py-4">
      <img
        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        :src="paciente.imagem"
        alt=""
      />
      <div class="px-4">
        <div>
          <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}`" class="text-cinza-1 font-bold">
            {{ paciente.nome }} {{ paciente.Sobrenome }}
          </router-link>
        </div>
        <div class="text-sm text-cinza-3">
          {{ paciente.email }}
        </div>
      </div>
    </td>

    <td class="py-3 px-2 text-cinza-2">{{ paciente.Provincia }}, {{ paciente.municipio }}, {{ paciente.bairro }}</td>

    <td class="py-3 px-2">
      <div class="inline-flex items-center space-x-3">
        <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}/editar`" title="Edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            style="font-size: 22px; height: 22px; width: 22px"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"
              ></path>
              <path
                d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"
              ></path>
            </g>
          </svg>
        </router-link>

        <a href="" title="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            style="font-size: 22px; height: 22px; width: 22px"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            ></path>
          </svg>
        </a>
      </div>
    </td>
  </tr>
</template>
    
<script setup>
import { defineProps } from "vue";

defineProps({
  paciente: {
    type: Object,
    required: true,
  },
});
</script>