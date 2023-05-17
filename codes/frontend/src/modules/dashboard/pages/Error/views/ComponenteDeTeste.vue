<script>
import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Monitor from "../components/Monitor.vue";

export default {
  components: { Header, DefaultLayout, Monitor },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Meu Perfil" />
      <div class="px-8 pb-8 flex gap-10">
        <Monitor />
      </div>
    </div>
  </DefaultLayout>
</template>