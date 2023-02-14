<template>
  <NavbarComp />
  <main>
    <HeaderComp />
    
  </main>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import NavbarComp from '@/components/NavbarComp.vue';

export default {
    components: { HeaderComp, NavbarComp }
}
</script>