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
          <i class='bx bx-group' :class="`text-xl`"></i>
          <span :class="`text-base ml-2 ${isOpen ? '' : 'hidden'}`">Profissionais</span>
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