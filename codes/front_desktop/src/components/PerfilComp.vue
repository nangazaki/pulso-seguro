<template>
    <div class="min-w-[200px] relative">
      <div class="inline-flex items-center transition ease-in" @click="toggleDrop">
        <div class="mr-3">
          <img class="w-10 h-10 rounded-full object-cover" 
            :src="`http://localhost:8000/storage/${user.imagem}`"
          >
        </div>
        <div>
          <span class="font-montserrat text-lg -mb-1 text-cinza-1 block">{{ user.name }} {{ user.sobrenome }}</span>
          <span class="text-cinza-3 block">{{ Number(user.isAdmin) ? 'Admin' : 'Doctor(a)'}}</span>
        </div>
      </div>
           
      <div v-show="showDropDown" class="absolute z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          :class="[animationCSS]"
      >
        <div class="py-1 text-left" role="none">
          <router-link to="/meu-perfil" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Perfil</router-link>
          <router-link to="/configuracoes-gerais" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Configurações</router-link>
          <router-link v-if="Number(user.isAdmin)" to="admin/adicionar-admin" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Adicionar Admin</router-link>
          <span class="block w-full h-[1px] bg-[#f0f0f0]"></span>
          <form method="POST" action="#" role="none">
            <button type="submit" class="text-cinza-3 block w-full px-4 py-2 text-left text-sm transition duration-200 hover:text-cinza-2">Terminar sessão</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data(){
    return {
      showDropDown: false
    }
  },
  props: {
    usuario: {
        type: Object,
        required: true
    }
  },
  computed: {
    animationCSS() {
      return this.showDropDown ? 'drop-enter' : 'drop-left' 
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    },
  }
}
</script>