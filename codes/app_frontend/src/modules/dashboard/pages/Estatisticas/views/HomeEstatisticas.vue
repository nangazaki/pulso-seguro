<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EstatisticasGerais from "../components/EstatisticasGerais.vue";

export default {
  components: { EstatisticasGerais, DefaultLayout },
  setup() {
    return {};
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Estatísticas Gerais</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
      </header>
      <div class="px-8">
        <EstatisticasGerais />
      </div>
    </div>
  </DefaultLayout>
</template>
