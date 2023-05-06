<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <header>
        <span>{{ route }}</span>
      </header>
    </div>
  </DefaultLayout>
</template>

<script>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
