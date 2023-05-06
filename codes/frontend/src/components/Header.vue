<script>
import { authStore } from "@/store/authStore";
import { computed } from "vue";
import { string } from "yup";

export default {
  props: {
    page: {
      type: string,
      required: true,
    },
  },
  setup() {
    const AuthStore = authStore();
    const user = computed(() => AuthStore.getUser);

    return { user };
  },
};
</script>

<template>
  <header class="p-8">
    <span class="text-sm text-gray-500">{{ page }}</span>
    <h1 class="text-2xl font-light">
      Olá, {{ user.name }} {{ user.sobrenome }}!
    </h1>
  </header>
</template>