<script>
import { onMounted } from "vue";
import { estatsStore } from "@/store/estatsStore";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Header from "@/components/Header.vue";
import EstatisticasGerais from "../components/EstatisticasGerais.vue";
import Calendar from "../components/Calendar.vue";

export default {
  components: { EstatisticasGerais, DefaultLayout, Header, Calendar },
  setup() {
    const Estatisticas = estatsStore();

    onMounted(async () => {
      await Estatisticas.PegarEstatisticas();
    });
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Estatisticas Gerais" />
      <div class="px-8 flex gap-4">
        <EstatisticasGerais />
        <Calendar />
      </div>
    </div>
  </DefaultLayout>
</template>
