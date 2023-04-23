<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Apontamentos</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
    </div>
  </DefaultLayout>
</template>

<script>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
