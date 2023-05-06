<script>
import { computed, reactive } from "vue";
import { authStore } from "@/store/authStore";

export default {
  setup() {
    const state = reactive({ navbar: false, user: null });
    const AuthStore = authStore();

    state.navbar = computed(() => AuthStore.getNavbar);
    state.user = computed(() => AuthStore.getUser);

    function openMenuUser() {
      AuthStore.MenuUser(true);
    }

    return { openMenuUser, state };
  },
};
</script>

<template>
  <div class="user h-32 mb-4">
    <div class="w-full flex flex-col items-center">
      <div
        @click="openMenuUser"
        :class="`${
          state.navbar ? 'w-16 h-16' : 'w-10 h-10'
        } rounded-full mb-2 overflow-hidden`"
      >
        <img
          :src="`http://localhost:8000/storage/${state.user.imagem}`"
          alt="Foto de perfil do usuario"
          class="w-full h-full object-cover"
        />
      </div>
      <div v-if="state.navbar">
        <div class="font-montserrat text-sm">
          {{ state.user.name }} {{ state.user.sobrenome }}
        </div>
      </div>
    </div>
  </div>
</template>
