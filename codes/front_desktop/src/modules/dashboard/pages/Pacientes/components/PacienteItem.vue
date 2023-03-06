<template>
  <div class="w-[360px] h-auto flex flex-col min-w-0 bg-white rounded-xl overflow-hidden card-shadow">
    <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}`">
      <img :src="paciente.imagem" class="w-full h-60 object-cover" alt="card image">
    </router-link>
    <div class="p-6">
      
      <span class="font-montserrat text-cinza-3 uppercase text-xs mb-4">Informações do Paciente</span>
      
      <div class="">
        <div class="mb-6">
          <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}`" class="font-montserrat text-lg text-primaria-claro">
            {{ paciente.name }} {{ paciente.sobrenome }}
          </router-link>
          
          <div class="mt-2">
            
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-phone text-primaria-claro"><path d="M2.36839 7.02416C2.12354 6.39146 2.25595 5.68011 2.67976 5.15035L4.20321 3.24603C5.07388 2.1577 6.76286 2.27131 7.47994 3.46644L8.71763 5.52926C8.89353 5.82244 8.90746 6.18516 8.75456 6.49097L8.10563 7.78883C8.0362 7.92769 7.99726 8.08102 8.00921 8.2358C8.15129 10.0757 9.92438 11.8487 11.7642 11.9908C11.919 12.0028 12.0723 11.9638 12.2112 11.8944L13.5091 11.2455C13.8149 11.0926 14.1776 11.1065 14.4708 11.2824L16.5336 12.5201C17.7287 13.2372 17.8423 14.9262 16.754 15.7968L14.8497 17.3203C14.3199 17.7441 13.6086 17.8765 12.9759 17.6317C7.87729 15.6586 4.34147 12.1228 2.36839 7.02416Z"></path></svg>
                </div>
              </div>
              <div class="text-cinza-2">{{ paciente.telefone }}</div>
            </div>
            
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-email text-primaria-claro"><path d="M18 7L11.5652 10.2174C10.9086 10.5457 10.5802 10.7099 10.2313 10.7505C10.0776 10.7684 9.92238 10.7684 9.76869 10.7505C9.41977 10.7099 9.09143 10.5457 8.43475 10.2174L2 7"></path><path d="M14.5 4C15.9045 4 16.6067 4 17.1111 4.33706C17.3295 4.48298 17.517 4.67048 17.6629 4.88886C18 5.39331 18 6.09554 18 7.5L18 12.5C18 13.9045 18 14.6067 17.6629 15.1111C17.517 15.3295 17.3295 15.517 17.1111 15.6629C16.6067 16 15.9045 16 14.5 16L5.5 16C4.09554 16 3.39331 16 2.88886 15.6629C2.67048 15.517 2.48298 15.3295 2.33706 15.1111C2 14.6067 2 13.9045 2 12.5L2 7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4L14.5 4Z"></path></svg>
                </div>
              </div>
              <div class="text-cinza-2">{{ paciente.email }}</div>
            </div>
          </div>
      </div>
        <div class="mt-4 flex flex-col items-center justify-center">
          <div class="w-full flex justify-center gap-3 mb-3">
            <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}/editar`" 
              class="w-[40%] flex items-center justify-center gap-2 bg-cinza-4 text-cinza-1 rounded-md py-1 px-2"
            >
              <span>Editar</span>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="w-5 h-5" viewBox="0 0 24 24" style="font-size: 22px; height: 22px; width: 22px">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
                  <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path>
                </g>
              </svg>
            </router-link>
            
            <button title="Eliminar" @click="open"
              class="w-[40%] flex items-center justify-center gap-2 rounded-md border border-red-500 py-1 px-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              <span>Eliminar</span>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="w-5 h-5" viewBox="0 0 24 24" style="font-size: 22px; height: 22px; width: 22px">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </button>
          </div>
          
          <router-link :to="`/lista-pacientes/perfil-paciente/${paciente.id}`"
            :class="`w-[calc(80%+16px)] flex items-center justify-center gap-2 border border-primaria-claro text-primaria-claro font-nunito rounded-md py-1 transition duration-300 hover:bg-primaria-claro hover:text-white`"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-user text-primary" data-v-23ee19ef=""><path d="M10.0179 8C10.9661 8 11.4402 8 11.8802 7.76629C12.1434 7.62648 12.4736 7.32023 12.6328 7.06826C12.8989 6.64708 12.9256 6.29324 12.9789 5.58557C13.0082 5.19763 13.0071 4.81594 12.9751 4.42106C12.9175 3.70801 12.8887 3.35148 12.6289 2.93726C12.4653 2.67644 12.1305 2.36765 11.8573 2.2256C11.4235 2 10.9533 2 10.0129 2V2C9.03627 2 8.54794 2 8.1082 2.23338C7.82774 2.38223 7.49696 2.6954 7.33302 2.96731C7.07596 3.39365 7.05506 3.77571 7.01326 4.53982C6.99635 4.84898 6.99567 5.15116 7.01092 5.45586C7.04931 6.22283 7.06851 6.60631 7.33198 7.03942C7.4922 7.30281 7.8169 7.61166 8.08797 7.75851C8.53371 8 9.02845 8 10.0179 8V8Z" data-v-23ee19ef=""></path><path d="M16.5 17.5L16.583 16.6152C16.7267 15.082 16.7986 14.3154 16.2254 13.2504C16.0456 12.9164 15.5292 12.2901 15.2356 12.0499C14.2994 11.2842 13.7598 11.231 12.6805 11.1245C11.9049 11.048 11.0142 11 10 11C8.98584 11 8.09511 11.048 7.31945 11.1245C6.24021 11.231 5.70059 11.2842 4.76443 12.0499C4.47077 12.2901 3.95441 12.9164 3.77462 13.2504C3.20144 14.3154 3.27331 15.082 3.41705 16.6152L3.5 17.5" data-v-23ee19ef=""></path></svg>
            <span>Ver perfil</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    paciente: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('pacientes', ['selectPacientDelete']),

    open() {
      let values = {
        visible: true,
        paciente: {
          id: this.paciente.id,
          name: `${this.paciente.name} ${this.paciente.sobrenome}`
        }
      }
      this.selectPacientDelete(values)
    }
  }
};
</script>
