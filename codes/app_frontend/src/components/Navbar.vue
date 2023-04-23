<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "@/store/authStore";

import Menu from "./Menu.vue";
import UsuarioMenu from "./UsuarioMenu.vue";

export default {
  components: { Menu, UsuarioMenu },
  setup() {
    const router = useRouter();
    const AuthStore = authStore();
    const navbar = computed(() => AuthStore.getNavbar);

    function openNav() {
      AuthStore.Navbar(true);
    }
    function closeNav() {
      AuthStore.Navbar(false);
    }
    function openMenuUser() {
      AuthStore.MenuUser(true);
    }

    function signOut() {
      AuthStore.SignOut();
      router.push("/");
    }

    return { navbar, openNav, closeNav, openMenuUser, signOut };
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
        <div class="w-full flex flex-col items-center">
          <div
            :class="`${
              navbar ? 'w-14 h-14' : 'w-8 h-8'
            } bg-white rounded-full mb-2 cursor-pointer`"
            @click="openMenuUser"
          ></div>
          <div v-if="navbar">
            <div class="font-montserrat text-sm">Nangazaki44</div>
          </div>
        </div>
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
          <span class="text-base ml-2"> Sair </span>
        </span>
      </li>
    </div>
  </div>
</template>

