<template lang="">
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />
    Teste
  </main>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  components: { NavbarComp, HeaderComp }
}
</script>
<style lang="">
  
</style>