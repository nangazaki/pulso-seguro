<template>
  <div class="w-[360px] h-auto flex flex-col min-w-0 bg-white rounded-xl overflow-hidden card-shadow">
    <router-link :to="`/lista-medicos/perfil-medico/${doctor.id}`">
      <img :src="doctor.imagem" class="w-full h-60 object-cover" alt="card image">
    </router-link>
    <div class="p-6">
      <router-link :to="`/lista-medicos/perfil-medico/${doctor.id}`" class="font-montserrat text-base text-primaria-claro">
        {{ doctor.name }} {{ doctor.sobrenome }}
      </router-link>
      <div class="font-nunito text-cinza-3 mb-4">{{ doctor.especialidade }}</div>
      
      <div class="">
        <div class="mb-6">
          <span class="font-montserrat text-cinza-3 uppercase text-sm mb-4">Informações de contacto</span>
          <div class="mt-2">
            
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-phone text-primaria-claro"><path d="M2.36839 7.02416C2.12354 6.39146 2.25595 5.68011 2.67976 5.15035L4.20321 3.24603C5.07388 2.1577 6.76286 2.27131 7.47994 3.46644L8.71763 5.52926C8.89353 5.82244 8.90746 6.18516 8.75456 6.49097L8.10563 7.78883C8.0362 7.92769 7.99726 8.08102 8.00921 8.2358C8.15129 10.0757 9.92438 11.8487 11.7642 11.9908C11.919 12.0028 12.0723 11.9638 12.2112 11.8944L13.5091 11.2455C13.8149 11.0926 14.1776 11.1065 14.4708 11.2824L16.5336 12.5201C17.7287 13.2372 17.8423 14.9262 16.754 15.7968L14.8497 17.3203C14.3199 17.7441 13.6086 17.8765 12.9759 17.6317C7.87729 15.6586 4.34147 12.1228 2.36839 7.02416Z"></path></svg>
                </div>
              </div>
              <div class="text-cinza-2">{{ doctor.telefone }}</div>
            </div>
            
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-email text-primaria-claro"><path d="M18 7L11.5652 10.2174C10.9086 10.5457 10.5802 10.7099 10.2313 10.7505C10.0776 10.7684 9.92238 10.7684 9.76869 10.7505C9.41977 10.7099 9.09143 10.5457 8.43475 10.2174L2 7"></path><path d="M14.5 4C15.9045 4 16.6067 4 17.1111 4.33706C17.3295 4.48298 17.517 4.67048 17.6629 4.88886C18 5.39331 18 6.09554 18 7.5L18 12.5C18 13.9045 18 14.6067 17.6629 15.1111C17.517 15.3295 17.3295 15.517 17.1111 15.6629C16.6067 16 15.9045 16 14.5 16L5.5 16C4.09554 16 3.39331 16 2.88886 15.6629C2.67048 15.517 2.48298 15.3295 2.33706 15.1111C2 14.6067 2 13.9045 2 12.5L2 7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4L14.5 4Z"></path></svg>
                </div>
              </div>
              <div class="text-cinza-2">{{ doctor.email }}</div>
            </div>
            
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-pin text-primaria-claro"><path d="M3.5 8.49998C3.5 -0.191432 16.5 -0.191368 16.5 8.49998C16.5 12.6585 12.8256 15.9341 11.0021 17.3036C10.4026 17.7539 9.59777 17.754 8.99821 17.3037C7.17467 15.9342 3.5 12.6585 3.5 8.49998Z"></path></svg>
                </div>
              </div>
              <div class="text-cinza-2">{{ doctor.provincia }}, {{ doctor.municipio }}, {{ doctor.bairro }}</div>
            </div>
          </div>
      </div>
        <div class="mt-4 flex flex-col items-center justify-center">
          <div class="w-full flex justify-center gap-3 mb-3">
            <router-link :to="`/lista-medicos/perfil-medico/${doctor.id}/editar`" 
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
            
            <button title="Eliminar" @click="ActionAbrirModal({isVisible: true, doctorID: doctor.id})"
              class="w-[40%] flex items-center justify-center gap-2 rounded-md border border-red-500 py-1 px-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              <span>Eliminar</span>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="w-5 h-5" viewBox="0 0 24 24" style="font-size: 22px; height: 22px; width: 22px">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </button>
          </div>
          
          <router-link :to="`/lista-medicos/perfil-medico/${doctor.id}`"
            :class="`w-[calc(80%+16px)] flex items-center justify-center gap-2 border border-primaria-claro text-primaria-claro font-nunito rounded-md py-1 transition duration-300 hover:bg-primaria-claro hover:text-white`"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-health undefined"><path d="M9.5 3.00001V3.00001C9.83758 3.00001 10.0064 3.00001 10.1455 3.01964C11.0759 3.15098 11.7895 3.91236 11.8602 4.84939C11.8708 4.98944 11.8599 5.15788 11.838 5.49475L11.5634 9.72329C11.4072 12.1288 9.41057 14 7 14V14C4.58942 14 2.59278 12.1288 2.43658 9.72329L2.162 5.49475C2.14012 5.15788 2.12918 4.98944 2.13976 4.84939C2.21053 3.91236 2.92408 3.15098 3.85455 3.01964C3.99363 3.00001 4.16242 3.00001 4.5 3.00001V3.00001"></path><path d="M7 14V14C7 14.93 7 15.395 7.10222 15.7765C7.37962 16.8117 8.18827 17.6204 9.22354 17.8978C9.60504 18 10.07 18 11 18H11.75C13.383 18 14.1995 18 14.8269 17.6906C15.4192 17.3985 15.8985 16.9192 16.1906 16.3269C16.5 15.6995 16.5 14.883 16.5 13.25L16.5 10.5"></path><path d="M18 8.5C18 9.32842 17.3284 10 16.5 9.99999V9.99999C15.6716 9.99998 15 9.32842 15 8.49999V8.49999C15 7.67157 15.6716 7 16.5 7V7C17.3284 7 18 7.67157 18 8.5V8.5Z"></path><path d="M5 2 5 4M9 2 9 4"></path></svg>
            <span>Ver perfil</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    doctor: {
      type: Object,
      required: true,
    },
  },
};
</script>
