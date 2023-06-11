<script>
import { computed, onMounted, reactive } from "vue";
import { authStore } from "@/store/authStore";
import { notasStore } from "@/store/notasStore";

import Header from "@/components/Header.vue";
import Adicionar from "../components/Adicionar.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CardApontamento from "../components/CardApontamento.vue";

export default {
  components: { DefaultLayout, Header, CardApontamento, Adicionar },
  setup() {
    const state = reactive({ notas: undefined, user: undefined });
    state.user = computed(() => authStore().getUser);
    state.notas = computed(() => notasStore().getNotes);

    onMounted(async () => {
      setTimeout(async () => {
        await notasStore().PegarNotas();
      }, 1000);
    });

    function modalNovaNota() {
      notasStore().openNewNotesModal();
    }

    return { modalNovaNota, state };
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
          v-for="nota in state.notas"
          :key="nota.apontamento"
          :apontamento="nota"
          :user_id="state.user.id"
        />
      </div>
    </div>
  </DefaultLayout>
</template>


