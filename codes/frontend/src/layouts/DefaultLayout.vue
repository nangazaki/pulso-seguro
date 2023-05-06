<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar, Footer },
  setup() {},
};
</script>
<template>
  <div class="layout">
    <Navbar />
    <main class="overflow-y-scroll flex flex-col justify-between">
      <slot />
      <Footer />
    </main>
  </div>
</template>