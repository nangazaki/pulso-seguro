<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <div class="flex gap-8 mb-8">
    </div>
  </main>
</template>

<script>
import NavbarComp from './NavbarComp.vue';
import HeaderComp from './HeaderComp.vue';

export default {
  components: { NavbarComp, HeaderComp }

};
</script>