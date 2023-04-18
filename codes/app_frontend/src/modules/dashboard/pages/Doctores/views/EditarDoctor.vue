<template>
  <div class="layout">
    <Navbar />
    <main class="overflow-y-scroll flex flex-col justify-between">
      <div class="max-w-[1500px] desktop:mx-auto mb-20">
        <header class="p-8">
          <span class="text-sm text-gray-500">Informações do Doctor</span>
          <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
        </header>
        <div class="px-8 pb-8 flex gap-8">
          <DoctorSobre />
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import DoctorSobre from "../components/DoctorSobre.vue";

export default {
  components: { Navbar, Footer, DoctorSobre },
  setup() {},
};
</script>
