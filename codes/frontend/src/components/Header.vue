<script>
import { computed } from "vue";
import { authStore } from "@/store/authStore";

import Notificacao from "./Notificacao.vue";

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
    const notifications = computed(() => AuthStore.getNotifications);

    return { user, notifications };
  },
  components: { Notificacao },
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
    <div>
      <Notificacao :notifications="notifications" />
    </div>
  </header>
</template>