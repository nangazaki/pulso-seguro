<template>
  <Navbar />
  <main>
    <div>
      <header>
        <span>{{ route }}</span>
      </header>
    </div>
    <Footer />
  </main>
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
