<template>
  <div class="menu">
    <ul class="w-full">
      <li
        :class="`${
          route.name.includes('Dashboard') ? 'active' : ''
        } w-full h-10 inline-flex mb-3 rounded-lg overflow-hidden duration-300 ease hover:active`"
      >
        <router-link to="/dashboard" class="p-3 pr-40 flex items-center">
          <i class="ph ph-house" :class="`text-xl font-medium`"></i>
          <span class="text-base ml-2"> Dashboard </span>
        </router-link>
      </li>

      <li
        :class="`${
          route.fullPath.includes('estatisticas') ? 'active' : ''
        } w-full h-10 inline-flex mb-3 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal`"
      >
        <router-link
          to="/dashboard/estatisticas"
          class="p-3 pr-40 flex items-center"
        >
          <i class="ph ph-chart-line" :class="`text-xl font-medium`"></i>
          <span class="text-base ml-2"> Estatísticas </span>
        </router-link>
      </li>

      <li
        :class="`${
          route.fullPath.includes('apontamentos') ? 'active' : ''
        } w-full h-10 inline-flex mb-3 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal`"
      >
        <router-link
          to="/dashboard/apontamentos"
          class="p-3 pr-40 flex items-center"
        >
          <i class="ph ph-notepad" :class="`text-xl font-medium`"></i>
          <span class="text-base ml-2"> Apontamentos </span>
        </router-link>
      </li>

      <li
        :class="`${
          route.fullPath.includes('pacientes') ? 'active' : ''
        } w-full h-10 inline-flex mb-3 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal`"
      >
        <router-link
          to="/dashboard/pacientes"
          class="p-3 pr-40 flex items-center"
        >
          <i class="ph ph-user" :class="`text-xl font-medium`"></i>
          <span class="text-base ml-2"> Pacientes </span>
        </router-link>
      </li>

      <li
        :class="`${
          route.fullPath.includes('doctores') ? 'active' : ''
        } w-full h-10 inline-flex mb-3 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal`"
      >
        <router-link
          to="/dashboard/doctores"
          class="p-3 pr-40 flex items-center"
        >
          <i class="ph ph-stethoscope" :class="`text-xl font-medium`"></i>
          <span class="text-base ml-2"> Doctores </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>