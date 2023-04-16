<template>
  <Navbar />
  <main class="overflow-y-scroll flex flex-col justify-between">
    <div class="max-w-[1500px] mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Apontamentos</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import { useRoute } from "vue-router";

export default {
  components: { Navbar, Footer },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
