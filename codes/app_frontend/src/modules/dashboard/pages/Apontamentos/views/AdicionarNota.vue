<template>
  <div class="layout">
    <Navbar />
    <main class="overflow-y-scroll flex flex-col justify-between">
      <div class="container mx-auto mb-20">
        <header>
          <span>{{ route }}</span>
        </header>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import { useRoute } from "vue-router";

export default {
  components: { Navbar, Footer },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
