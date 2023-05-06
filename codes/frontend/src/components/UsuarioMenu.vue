<script>
import { authStore } from "@/store/authStore";
import { computed } from "vue";

export default {
  setup() {
    const AuthStore = authStore();
    const menu = computed(() => AuthStore.getMenuUser);
    const isAdmin = computed(() => AuthStore.getIsAdmin);

    return { menu, isAdmin };
  },
};
</script>

<template>
  <div
    v-if="menu"
    class="absolute inset-[0px auto auto 0px] transform-[translate3d(16px, 183px, 0px)] w-[200px] rounded-md bg-white shadow-menu"
  >
    <div class="py-1 text-sm text-gray-800" role="none">
      <router-link
        to="/dashboard/meu-perfil"
        class="block px-4 py-2 transition duration-200 hover:text-primary"
        >Perfil</router-link
      >
      <router-link
        v-if="isAdmin"
        to="/dashboard/configuracoes-gerais"
        class="block px-4 py-2 transition duration-200 hover:text-primary"
        >Configurações</router-link
      >
      <router-link
        v-if="isAdmin"
        to="/dashboard/adicionar-adm"
        class="block px-4 py-2 transition duration-200 hover:text-primary"
        >Adicionar Admin</router-link
      >
      <span class="block w-full h-[1px] bg-[#f0f0f0]"></span>
      <button
        type="button"
        class="block w-full px-4 py-2 text-left transition duration-200 hover:text-primary"
      >
        <i class="ph ph-sign-out" :class="`text-xl`"></i> Terminar sessão
      </button>
    </div>
  </div>
</template>
