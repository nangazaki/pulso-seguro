<script>
import DoctorSobre from "../components/DoctorSobre.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: { DoctorSobre, DefaultLayout },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header class="p-8">
        <span class="text-sm text-gray-500">Informações do Doctor</span>
        <h1 class="text-2xl font-light">Olá, Nome do Usuário!</h1>
      </header>
      <div class="px-8 pb-8 flex gap-8">
        <DoctorSobre />
      </div>
    </div>
  </DefaultLayout>
</template>

