<template>
  <div
    :class="`${route.fullPath.includes('login') ? '' : 'layout'} bg-background`"
  >
    <router-view />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
