<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const pages = [
      "Dashboard",
      "Estatisticas",
      "Apontamentos",
      "Pacientes",
      "Doctores",
    ];

    return { route, pages };
  },
};
</script>

<template>
  <header class="p-8">
    <span class="text-sm text-gray-500">Adicionar Doctor</span>
    <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
  </header>
</template>