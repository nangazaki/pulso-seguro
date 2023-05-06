<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "@/store/authStore";

import Menu from "./Menu.vue";
import UsuarioMenu from "./UsuarioMenu.vue";
import Usuario from "./Usuario.vue";

export default {
  components: { Menu, UsuarioMenu, Usuario },
  setup() {
    const router = useRouter();
    const AuthStore = authStore();
    const navbar = computed(() => AuthStore.getNavbar);

    function openNav() {
      AuthStore.Navbar(true);
    }
    function closeNav() {
      AuthStore.MenuUser(false);
      AuthStore.Navbar(false);
    }

    function signOut() {
      AuthStore.SignOut();
      router.push("/");
    }

    return { navbar, openNav, closeNav, signOut };
  },
};
</script>

<template>
  <div
    @mouseenter="openNav"
    @mouseleave="closeNav"
    id="nav"
    :class="`${
      navbar ? 'w-60 fixed top-0 z-50' : 'w-20'
    } h-screen relative flex flex-col justify-between text-white p-5 pt-8 transition-all duration-300 card-shadow rounded-r-[18px] nav-container`"
  >
    <div>
      <div class="w-full h-16 flex justify-center mb-16">
        <div v-if="navbar">
          <router-link to="/dashboard">
            <img src="@/assets/logo-2.svg" alt="" />
          </router-link>
        </div>
        <div v-else>
          <img src="@/assets/oficial.png" alt="" />
        </div>
      </div>

      <div class="user h-28 mb-4">
        <Usuario />
      </div>
      <UsuarioMenu />

      <Menu />
    </div>

    <div class="relative w-full h-auto flex items-center mb-4 rounded-lg">
      <li
        class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active"
      >
        <span
          @click="signOut"
          class="p-3 pr-40 flex items-center cursor-pointer"
        >
          <i class="ph ph-sign-out" :class="`text-xl`"></i>
          <span v-show="navbar" class="text-base ml-2"> Sair </span>
        </span>
      </li>
    </div>
  </div>
</template>

