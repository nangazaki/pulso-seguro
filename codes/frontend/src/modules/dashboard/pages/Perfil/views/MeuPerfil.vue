<script>
import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Sobre from "../components/Sobre.vue";

export default {
  components: { Header, DefaultLayout, Sobre },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Meu Perfil" />
      <div class="px-8 pb-8 flex gap-8">
        <Sobre />
      </div>
    </div>
  </DefaultLayout>
</template>