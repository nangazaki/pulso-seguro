<script>
import { computed } from "vue";
import { authStore } from "@/store/authStore";

export default {
  props: {
    page: {
      type: String,
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
  <header class="p-8 flex justify-between items-center">
    <div>
      <span class="text-sm text-gray-500">{{ page }}</span>
      <h1 class="text-2xl font-light">
        Olá, {{ user.name }} {{ user.sobrenome }}!
      </h1>
    </div>
    <div class="h-14 px-6 bg-white rounded-xl">Notificacao</div>
  </header>
</template>