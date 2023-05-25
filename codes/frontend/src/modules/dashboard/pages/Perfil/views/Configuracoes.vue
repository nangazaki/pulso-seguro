<script>
import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: { Header, DefaultLayout },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Configurações Gerais" />
      <div class="px-8 pb-8 flex gap-8"></div>
    </div>
  </DefaultLayout>
</template>~