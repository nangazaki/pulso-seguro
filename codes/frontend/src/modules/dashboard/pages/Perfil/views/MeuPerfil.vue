<script>
import { computed } from "vue";
import { authStore } from "@/store/authStore";
import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Sobre from "../components/Sobre.vue";
import Configuracoes from "../components/Configuracoes.vue";
import EditarInfromacoes from "../components/EditarInfromacoes.vue";
import EditarInformacoesAcesso from "../components/EditarInformacoesAcesso.vue";

export default {
  components: {
    Header,
    DefaultLayout,
    Sobre,
    Configuracoes,
    EditarInfromacoes,
    EditarInformacoesAcesso,
  },
  setup() {
    const menuSelected = computed(() => authStore().getConfigSelected);

    return { menuSelected };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <Header page="Meu Perfil" />
      <div class="px-8 pb-8 flex gap-8">
        <Sobre />

        <EditarInfromacoes
          v-if="menuSelected === 'editar-informações-pessoais'"
        />
        <EditarInformacoesAcesso
          v-if="menuSelected === 'editar-informações-acesso'"
        />
      </div>
    </div>
  </DefaultLayout>
</template>