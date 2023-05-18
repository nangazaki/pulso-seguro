<script>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";

import { notasStore } from "@/store/notasStore";

import Header from "@/components/Header.vue";
import Adicionar from "../components/Adicionar.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CardApontamento from "../components/CardApontamento.vue";

export default {
  components: { DefaultLayout, Header, CardApontamento, Adicionar },
  setup() {
    const NotasStore = notasStore();

    onMounted(async () => {
      await NotasStore.PegarNotas();
    });

    const notas = computed(() => NotasStore.getNotes);

    function modalNovaNota() {
      NotasStore.openNewNotesModal();
    }

    return { modalNovaNota, notas };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Apontamentos" />
      <Adicionar />
      <div class="flex justify-between items-center flex-wrap px-8 mb-6">
        <h2 class="text-xl text-primary mb-3">Apontamentos recentes</h2>
        <div>
          <button
            @click="modalNovaNota"
            class="border border-gradient-1-lighter text-gradient-1 px-4 py-2 flex items-center gap-2 rounded-lg ease-linear hover:bg-gradient-1-lighter hover:text-white"
          >
            Novo Apontamento
          </button>
        </div>
      </div>
      <div class="px-8 w-full flex gap-4 flex-wrap">
        <CardApontamento
          v-for="nota in notas"
          :key="nota.apontamento"
          :apontamento="nota"
        />
      </div>
    </div>
  </DefaultLayout>
</template>


