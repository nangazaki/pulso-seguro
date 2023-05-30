<script>
import { onMounted, reactive } from "vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { Navbar, Footer, Spinner },
  setup() {
    const loader = reactive({ loading: true });

    onMounted(() => {
      setTimeout(() => {
        loader.loading = false;
      }, 2000);
    });

    return { loader };
  },
};
</script>
<template>
  <div class="layout">
    <Navbar />
    <main class="overflow-y-scroll flex flex-col justify-between">
      <slot />
      <Spinner v-if="loader.loading" />
      <Footer />
    </main>
  </div>
</template>