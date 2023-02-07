<template>
  <header class="w-full h-16 mb-8 bg-branco-claro rounded-xl px-4 flex items-center card-shadow">
    <PerfilComp :usuario="usuario"/>
  </header>
</template>
  
<script>
import PerfilComp from './PerfilComp.vue';

export default {
  data() {
    return {
      usuario: {
        nome: "Helder Cambuta",
        cargo: "admin"
      }
    }
  },
  components: {
    PerfilComp,
  }
}
</script>
