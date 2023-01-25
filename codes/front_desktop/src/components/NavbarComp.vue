<template>
  <nav 
    :class="`relative bg-branco-claro text-preto-normal h-screen p-5 pt-8 duration-300 shadow-md ${isOpen ? 'w-60' : 'w-20'}`"
  >
    <i
      class="bx bx-left-arrow-alt"
      :class="`w-10 h-10 flex justify-center items-center bg-branco-claro text-preto-normal 
      text-3xl rounded-full absolute -right-4 top-9 border border-preto-normal cursor-pointer 
      transition-all ease-in duration-300 ${!isOpen && 'rotate-180'}`"
      @click="toggleMenu"
    ></i>
    <div class="p-1">
      <img :src="`${isOpen ? logo[1] : logo[0]}`" alt="">
    </div>
    <ul>
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden bg-primaria-normal text-branco-claro">
        <router-link to="/dashboard" class="p-3 pr-40 flex items-center">
          <i class="bx bx-home" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">Dashboard</span>
        </router-link>
      </li>
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:bg-cinza-6">
        <router-link to="/estatisticas" class="p-3 pr-40 flex items-center">
          <i class='bx bx-line-chart' :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">Estatísticas</span>
        </router-link>
      </li>
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:bg-cinza-6">
        <router-link to="/medicos" class="p-3 pr-40 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-xl"><path d="M9.5 3.00001V3.00001C9.83758 3.00001 10.0064 3.00001 10.1455 3.01964C11.0759 3.15098 11.7895 3.91236 11.8602 4.84939C11.8708 4.98944 11.8599 5.15788 11.838 5.49475L11.5634 9.72329C11.4072 12.1288 9.41057 14 7 14V14C4.58942 14 2.59278 12.1288 2.43658 9.72329L2.162 5.49475C2.14012 5.15788 2.12918 4.98944 2.13976 4.84939C2.21053 3.91236 2.92408 3.15098 3.85455 3.01964C3.99363 3.00001 4.16242 3.00001 4.5 3.00001V3.00001"></path><path d="M7 14V14C7 14.93 7 15.395 7.10222 15.7765C7.37962 16.8117 8.18827 17.6204 9.22354 17.8978C9.60504 18 10.07 18 11 18H11.75C13.383 18 14.1995 18 14.8269 17.6906C15.4192 17.3985 15.8985 16.9192 16.1906 16.3269C16.5 15.6995 16.5 14.883 16.5 13.25L16.5 10.5"></path><path d="M18 8.5C18 9.32842 17.3284 10 16.5 9.99999V9.99999C15.6716 9.99998 15 9.32842 15 8.49999V8.49999C15 7.67157 15.6716 7 16.5 7V7C17.3284 7 18 7.67157 18 8.5V8.5Z"></path><path d="M5 2 5 4M9 2 9 4"></path></svg>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">Doctores</span>
        </router-link>
      </li>
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:bg-cinza-6">
        <router-link to="/pacientes" class="p-3 pr-40 flex items-center">
          <i class="bx bx-home" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">Pacientes</span>
        </router-link>
      </li>
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:bg-cinza-6">
        <router-link to="/teste" class="p-3 pr-40 flex items-center">
          <i class="bx bx-home" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${this.isOpen ? '' : 'hidden'}`">Teste</span>
        </router-link>
      </li>
    </ul>

    <div :class="`relative -bottom-40 w-full h-auto flex items-center mb-4 rounded-lg ${this.isOpen ? '' : 'justify-center'}`">
      <li class="w-full h-10 inline-flex mb-4 rounded-lg overflow-hidden duration-300 ease hover:bg-cinza-6">
        <router-link to="/" class="p-3 pr-40 flex items-center">
          <i class="bx bx-exit" :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${this.isOpen ? '' : 'hidden'}`">Sair</span>
        </router-link>
      </li>
      </div>
  </nav>
</template>

<script>

console.log()

export default {
  data() {
    return{
      isOpen: true,
      logo: [require('@/assets/logo-icon-gradient.png'), require('@/assets/logo-inline-gradient.png')]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}

</script>