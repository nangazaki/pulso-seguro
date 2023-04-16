<template>
  <Navbar />
  <main class="overflow-y-scroll flex flex-col justify-between">
    <div class="max-w-[1500px] mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Dashboard</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário</h1>
      </header>
      <div class="px-8 flex gap-8">
        <Estatisticas />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";

import Estatisticas from "../components/Estatisticas.vue";

export default {
  components: { Navbar, Footer, Estatisticas },
  setup() {
    return {};
  },
};
</script>
