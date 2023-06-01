<script>
import EditarInfromacoes from "./EditarInfromacoes.vue";
export default {
  components: { EditarInfromacoes },
  setup() {},
};
</script>
<template>
  <section>
    <h2 class="text-primary mb-3">Configurações</h2>
    <div class="">
      <button>Editar Informações</button>
    </div>

    <section>
      <EditarInfromacoes />
    </section>
  </section>
</template>