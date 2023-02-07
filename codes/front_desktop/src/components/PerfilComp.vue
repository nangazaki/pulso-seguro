<template>
    <div class="min-w-[200px] relative">
      <div class="inline-flex items-center transition ease-in" @click="toggleDrop">
        <div class="mr-3">
          <img class="w-10 h-10 rounded-full" src="https://static.generated.photos/vue-static/face-generator/landing/wall/6.jpg">
        </div>
        <div>
          <span class="font-montserrat text-lg -mb-1 text-cinza-1 block">{{ usuario.nome }}</span>
          <span class="text-cinza-3 block">{{ usuario.cargo }}</span>
        </div>
      </div>
           
      <!-- Drop down -->
      <div v-show="showDropDown" class="absolute z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          :class="[animationCSS]"
      >
        <div class="py-1 text-left" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <router-link to="#" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Menu admin</router-link>
          <router-link to="#" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Menu admin</router-link>
          <router-link to="#" class="text-cinza-3 block px-4 py-2 text-sm transition duration-200 hover:text-cinza-2">Menu admin</router-link>
          <form method="POST" action="#" role="none">
            <button type="submit" class="text-cinza-3 block w-full px-4 py-2 text-left text-sm transition duration-200 hover:text-cinza-2">Terminar sessão</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
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
    }
  },
  methods: {
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    }
  }
}
</script>