<script>
import Header from "@/components/Header.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import FormularioAdicionar from "../components/FormularioAdicionar.vue";

export default {
  components: { DefaultLayout, Header, FormularioAdicionar },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Adicionar Paciente" />
      <div class="px-8 flex gap-8">
        <div>
          <FormularioAdicionar />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>