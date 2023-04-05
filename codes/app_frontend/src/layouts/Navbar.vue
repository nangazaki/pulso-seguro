<template>
  <div
    @mouseenter="openNav"
    @mouseleave="closeNav"
    id="nav"
    :class="`${
      state.navbar ? 'w-60 fixed top-0 z-50' : 'w-20'
    } h-screen relative flex flex-col justify-between text-white p-5 pt-8 transition-all duration-300 card-shadow rounded-r-[18px] nav-container`"
  >
    <div>
      <div class="w-full h-16 flex justify-center mb-16">
        <div v-if="state.navbar">
          <img src="@/assets/logo-2.svg" alt="" />
        </div>
        <div v-else>
          <img src="@/assets/logo-icon.svg" alt="" />
        </div>
      </div>

      <div class="user h-28 mb-4">
        <div class="w-full flex flex-col items-center">
          <div
            :class="`${
              state.navbar ? 'w-14 h-14' : 'w-8 h-8'
            } bg-white rounded-full mb-2`"
          ></div>
          <div v-if="state.navbar">
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
        <router-link to="/login" class="p-3 pr-40 flex items-center">
          <i class="ph ph-sign-out" :class="`text-xl`"></i>
          <span class="text-base ml-2"> Sair </span>
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Menu from "@/layouts/Menu.vue";
import UsuarioMenu from "@/components/UsuarioMenu.vue";

export default {
  components: { Menu, UsuarioMenu },
  setup() {
    const logo = [
      "@/assets/logo-icons.svg",
      "@/assets/logo-inline-light-2.svg",
    ];
    let state = reactive({ navbar: false });

    function openNav() {
      state.navbar = !state.navbar;
    }

    function closeNav() {
      state.navbar = !state.navbar;
    }

    return { logo, state, openNav, closeNav };
  },
};
</script>
