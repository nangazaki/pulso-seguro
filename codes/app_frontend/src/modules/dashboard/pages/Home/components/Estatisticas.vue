<script>
import { onMounted, ref } from "vue";
import { fetch_estatisticas } from "@/services";

export default {
  setup() {
    const estatisticas = ref([]);

    async function pegarEstatisticas() {
      // estatisticas.value = await fetch_estatisticas();
    }

    onMounted(async () => {
      await pegarEstatisticas();
    });

    return {};
  },
};
</script>

<template>
  <div>
    <div
      v-for="(estat, i) in titles"
      :key="i"
      class="bg-white w-1/3 h-auto rounded-lg p-4 shadow-card transition ease-linear duration-500 hover:shadow-xl"
    >
      <h2 class="text-primary font-montserrat mb-4">
        Total de {{ estat.title }}
      </h2>
      <span class="font-montserrat block text-3xl">{{ values[i] }}</span>
    </div>
  </div>
</template>