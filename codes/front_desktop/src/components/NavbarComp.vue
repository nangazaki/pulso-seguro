<template>
  <nav :class="`relative text-branco-normal h-screen p-5 pt-8 duration-300 card-shadow rounded-r-[16px] ${isOpen ? 'w-60' : 'w-20'}`">
    <i class="bx bx-left-arrow-alt"
      :class="`w-10 h-10 flex justify-center items-center bg-branco-claro text-primaria-claro text-3xl rounded-full absolute -right-4 top-9 cursor-pointer transition-all ease-in duration-300 ${!isOpen && 'rotate-180'}`"
      @click="toggleMenu"
    ></i>
    <div class="p-1 mb-6">
      <img :src="`${isOpen ? logo[1] : logo[0]}`" class="w-full" alt="Logotipo PUlso Seguro" />
    </div>
    <ul>
      <li :class="`w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal ${$route.fullPath.includes('dashboard') ? 'active' : '' }`">
        <router-link to="/dashboard" class="p-3 pr-40 flex items-center">
          <i class="bx bx-home" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">
            Dashboard
          </span>
        </router-link>
      </li>

      <li :class="`w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal ${$route.fullPath.includes('estatisticas') ? 'active' : '' }`">
        <router-link to="/estatisticas" class="p-3 pr-40 flex items-center">
          <i class="bx bx-line-chart" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">
            Estatísticas
          </span>
        </router-link>
      </li>

      <li :class="`w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal ${$route.fullPath.includes('medicos') ? 'active' : '' }`">
        <router-link to="/lista-medicos" class="p-3 pr-40 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-xl">
            <path d="M9.5 3.00001V3.00001C9.83758 3.00001 10.0064 3.00001 10.1455 3.01964C11.0759 3.15098 11.7895 3.91236 11.8602 4.84939C11.8708 4.98944 11.8599 5.15788 11.838 5.49475L11.5634 9.72329C11.4072 12.1288 9.41057 14 7 14V14C4.58942 14 2.59278 12.1288 2.43658 9.72329L2.162 5.49475C2.14012 5.15788 2.12918 4.98944 2.13976 4.84939C2.21053 3.91236 2.92408 3.15098 3.85455 3.01964C3.99363 3.00001 4.16242 3.00001 4.5 3.00001V3.00001"></path>
            <path d="M7 14V14C7 14.93 7 15.395 7.10222 15.7765C7.37962 16.8117 8.18827 17.6204 9.22354 17.8978C9.60504 18 10.07 18 11 18H11.75C13.383 18 14.1995 18 14.8269 17.6906C15.4192 17.3985 15.8985 16.9192 16.1906 16.3269C16.5 15.6995 16.5 14.883 16.5 13.25L16.5 10.5"></path>
            <path d="M18 8.5C18 9.32842 17.3284 10 16.5 9.99999V9.99999C15.6716 9.99998 15 9.32842 15 8.49999V8.49999C15 7.67157 15.6716 7 16.5 7V7C17.3284 7 18 7.67157 18 8.5V8.5Z"></path>
            <path d="M5 2 5 4M9 2 9 4"></path>
          </svg>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">
            Doctores
          </span>
        </router-link>
      </li>
      
      <li :class="`w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active text-branco-normal ${$route.fullPath.includes('pacientes') ? 'active' : '' }`">
        <router-link to="/lista-pacientes" class="p-3 pr-40 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-user text-primary"><path d="M10.0179 8C10.9661 8 11.4402 8 11.8802 7.76629C12.1434 7.62648 12.4736 7.32023 12.6328 7.06826C12.8989 6.64708 12.9256 6.29324 12.9789 5.58557C13.0082 5.19763 13.0071 4.81594 12.9751 4.42106C12.9175 3.70801 12.8887 3.35148 12.6289 2.93726C12.4653 2.67644 12.1305 2.36765 11.8573 2.2256C11.4235 2 10.9533 2 10.0129 2V2C9.03627 2 8.54794 2 8.1082 2.23338C7.82774 2.38223 7.49696 2.6954 7.33302 2.96731C7.07596 3.39365 7.05506 3.77571 7.01326 4.53982C6.99635 4.84898 6.99567 5.15116 7.01092 5.45586C7.04931 6.22283 7.06851 6.60631 7.33198 7.03942C7.4922 7.30281 7.8169 7.61166 8.08797 7.75851C8.53371 8 9.02845 8 10.0179 8V8Z"></path><path d="M16.5 17.5L16.583 16.6152C16.7267 15.082 16.7986 14.3154 16.2254 13.2504C16.0456 12.9164 15.5292 12.2901 15.2356 12.0499C14.2994 11.2842 13.7598 11.231 12.6805 11.1245C11.9049 11.048 11.0142 11 10 11C8.98584 11 8.09511 11.048 7.31945 11.1245C6.24021 11.231 5.70059 11.2842 4.76443 12.0499C4.47077 12.2901 3.95441 12.9164 3.77462 13.2504C3.20144 14.3154 3.27331 15.082 3.41705 16.6152L3.5 17.5"></path></svg>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">
            Pacientes
          </span>
        </router-link>
      </li>
    </ul>

    <div :class="`relative top-56 w-full h-auto flex items-center mb-4 rounded-lg ${this.isOpen ? '' : 'justify-center'}`">
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:active">
        <router-link to="/" @click="logout" class="p-3 pr-40 flex items-center">
          <i class="bx bx-exit" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${this.isOpen ? '' : 'hidden'}`">
            Sair
          </span>
        </router-link>
      </li>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      isOpen: false,
      logo: [
        require("@/assets/logo-icon-light.png"),
        require("@/assets/logo-inline-light-2.svg"),
      ],
    };
  },
  methods: {
    ...mapActions('auth', ['ActionSignOut']),

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      this.ActionSignOut()
      this.$router.push('login')
    }
  },
};
</script>

<style scoped>
  nav {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    background-image: linear-gradient(160deg, #1ca35e, #1ca35e, #1ea962, #1faf65);
  }
</style>