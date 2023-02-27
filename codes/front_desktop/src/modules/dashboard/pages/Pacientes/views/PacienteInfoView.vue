<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <span class="font-montserrat pl-2 text-2xl text-cinza-1 mb-8 block">
      Perfil do Paciente <span class="font-medium">{{ pacientSelected.name }} {{ pacientSelected.sobrenome }}</span>
    </span>

    <div class="w-full flex gap-8 my-8">
      <div class="w-[350px] px-4 py-6 bg-white rounded-md card-shadow">
        <div class="mb-6 flex items-center flex-col">
          <div class="w-24 relative mb-3 rounded-full">
            <img
              :src="pacientSelected.imagem"
              class="rounded-full"
              alt="thumb"
            />
          </div>
          <span class="font-montserrat text-lg mb-0">{{ pacientSelected.name }} {{ pacientSelected.sobrenome }}</span>
        </div>
        <div class="mb-6">
            <span class="font-montserrat text-cinza-3 uppercase text-sm mb-4">Informações de contacto</span>
            <div class="mt-2">
              <div class="flex items-center gap-2 mb-2">
                  <div class="col-auto">
                      <div class="w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-phone text-primaria-claro"><path d="M2.36839 7.02416C2.12354 6.39146 2.25595 5.68011 2.67976 5.15035L4.20321 3.24603C5.07388 2.1577 6.76286 2.27131 7.47994 3.46644L8.71763 5.52926C8.89353 5.82244 8.90746 6.18516 8.75456 6.49097L8.10563 7.78883C8.0362 7.92769 7.99726 8.08102 8.00921 8.2358C8.15129 10.0757 9.92438 11.8487 11.7642 11.9908C11.919 12.0028 12.0723 11.9638 12.2112 11.8944L13.5091 11.2455C13.8149 11.0926 14.1776 11.1065 14.4708 11.2824L16.5336 12.5201C17.7287 13.2372 17.8423 14.9262 16.754 15.7968L14.8497 17.3203C14.3199 17.7441 13.6086 17.8765 12.9759 17.6317C7.87729 15.6586 4.34147 12.1228 2.36839 7.02416Z"></path></svg>
                      </div>
                  </div>
                  <div class="text-cinza-1">{{ pacientSelected.telefone }}</div>
              </div>
              <div class="flex items-center gap-2 mb-2">
                  <div class="col-auto">
                      <div class="w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-email text-primaria-claro"><path d="M18 7L11.5652 10.2174C10.9086 10.5457 10.5802 10.7099 10.2313 10.7505C10.0776 10.7684 9.92238 10.7684 9.76869 10.7505C9.41977 10.7099 9.09143 10.5457 8.43475 10.2174L2 7"></path><path d="M14.5 4C15.9045 4 16.6067 4 17.1111 4.33706C17.3295 4.48298 17.517 4.67048 17.6629 4.88886C18 5.39331 18 6.09554 18 7.5L18 12.5C18 13.9045 18 14.6067 17.6629 15.1111C17.517 15.3295 17.3295 15.517 17.1111 15.6629C16.6067 16 15.9045 16 14.5 16L5.5 16C4.09554 16 3.39331 16 2.88886 15.6629C2.67048 15.517 2.48298 15.3295 2.33706 15.1111C2 14.6067 2 13.9045 2 12.5L2 7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4L14.5 4Z"></path></svg>
                      </div>
                  </div>
                  <div class="text-cinza-1">{{ pacientSelected.email }}</div>
              </div>
              <div class="flex items-center gap-2 mb-2">
                  <div class="col-auto">
                      <div class="w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-pin text-primaria-claro"><path d="M3.5 8.49998C3.5 -0.191432 16.5 -0.191368 16.5 8.49998C16.5 12.6585 12.8256 15.9341 11.0021 17.3036C10.4026 17.7539 9.59777 17.754 8.99821 17.3037C7.17467 15.9342 3.5 12.6585 3.5 8.49998Z"></path></svg>
                      </div>
                  </div>
                  <div class="text-cinza-1">{{ pacientSelected.municipio }}, {{ pacientSelected.bairro }}</div>
              </div>
            </div>
        </div>
        <div class="mb-6">
            <span class="font-montserrat text-cinza-3 uppercase text-sm">Doctor responsável</span>
            <div class="flex items-center gap-2 mt-2">
              <div class="col-auto">
                <div class="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-health text-primaria-claro"><path d="M9.5 3.00001V3.00001C9.83758 3.00001 10.0064 3.00001 10.1455 3.01964C11.0759 3.15098 11.7895 3.91236 11.8602 4.84939C11.8708 4.98944 11.8599 5.15788 11.838 5.49475L11.5634 9.72329C11.4072 12.1288 9.41057 14 7 14V14C4.58942 14 2.59278 12.1288 2.43658 9.72329L2.162 5.49475C2.14012 5.15788 2.12918 4.98944 2.13976 4.84939C2.21053 3.91236 2.92408 3.15098 3.85455 3.01964C3.99363 3.00001 4.16242 3.00001 4.5 3.00001V3.00001"></path><path d="M7 14V14C7 14.93 7 15.395 7.10222 15.7765C7.37962 16.8117 8.18827 17.6204 9.22354 17.8978C9.60504 18 10.07 18 11 18H11.75C13.383 18 14.1995 18 14.8269 17.6906C15.4192 17.3985 15.8985 16.9192 16.1906 16.3269C16.5 15.6995 16.5 14.883 16.5 13.25L16.5 10.5"></path><path d="M18 8.5C18 9.32842 17.3284 10 16.5 9.99999V9.99999C15.6716 9.99998 15 9.32842 15 8.49999V8.49999C15 7.67157 15.6716 7 16.5 7V7C17.3284 7 18 7.67157 18 8.5V8.5Z"></path><path d="M5 2 5 4M9 2 9 4"></path></svg>
                </div>
              </div>
              <div class="col text-alternate align-middle">Antoine Spears</div>
            </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex gap-6 flex-nowrap overflow-x-scroll">
          <div class="w-[234.5px] h-full flex-shrink-0 whitespace-normal select-none px-1">
            <div class="relative cursor-pointer card-shadow bg-white flex flex-col rounded-lg border border-white mb-5 hover:border-primaria-claro">
              <span class="absolute top-6 right-4 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-check text-primaria-claro"><path d="M16 5L7.7051 14.2166C7.32183 14.6424 6.65982 14.6598 6.2547 14.2547L3 11"></path></svg>
              </span>
              <div class="p-8 h-100 flex flex-col justify-between card-shadow items-center">
                <div class="w-16 h-16 rounded-full flex justify-center items-center border border-primaria-claro">
                  <svg text-primaria-clarog xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-thermometer text-primaria-claro"><path d="M12.2222 11.2573V4.0453C12.2222 3.50285 11.9881 2.98262 11.5713 2.59905C11.1546 2.21549 10.5894 2 10 2C9.41063 2 8.8454 2.21549 8.42865 2.59905C8.0119 2.98262 7.77778 3.50285 7.77778 4.0453V11.2573C7.06425 11.6961 6.52295 12.3345 6.23384 13.0781C5.94473 13.8218 5.92313 14.6313 6.17223 15.3871C6.42133 16.1429 6.92792 16.805 7.61719 17.2755C8.30646 17.746 9.14185 18 10 18C10.8581 18 11.6935 17.746 12.3828 17.2755C13.0721 16.805 13.5787 16.1429 13.8278 15.3871C14.0769 14.6313 14.0553 13.8218 13.7662 13.0781C13.477 12.3345 12.9358 11.6961 12.2222 11.2573Z"></path><path d="M10 5 12 5M10 8 12 8M10 11H12"></path></svg>
                </div>
                <div class="text-center mb-0 h-16 flex items-center">
                  Temperatura <br> Corporal
                </div>
                <div class="text-primaria-claro font-montserrat text-2xl font-light">37.2</div>
              </div>
            </div>
          </div>
          <div class="w-[234.5px] h-full flex-shrink-0 whitespace-normal select-none px-1">
            <div class="relative cursor-pointer card-shadow bg-white flex flex-col rounded-lg border border-white mb-5 hover:border-primaria-claro">
              <span class="absolute top-6 right-4 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-check text-primaria-claro"><path d="M16 5L7.7051 14.2166C7.32183 14.6424 6.65982 14.6598 6.2547 14.2547L3 11"></path></svg>
              </span>
              <div class="p-8 h-100 flex flex-col justify-between card-shadow items-center">
                <div class="w-16 h-16 rounded-full flex justify-center items-center border border-primaria-claro">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-heart text-primaria-claro"><path d="M8.76342 3.53821L9.38606 4.02249C9.74717 4.30335 10.2528 4.30335 10.6139 4.02249L11.2366 3.53822C13.0089 2.15977 15.5753 2.55317 16.8533 4.39919C18.1181 6.22616 17.9917 8.67633 16.5456 10.3635L10.7593 17.1142C10.3602 17.5798 9.63984 17.5798 9.24074 17.1142L3.45439 10.3635C2.00828 8.67633 1.88189 6.22616 3.14672 4.39919C4.42473 2.55317 6.99113 2.15977 8.76342 3.53821Z"></path></svg>                
                </div>
                <div class="text-center mb-0 h-16 flex items-center">
                  Batimento <br> Cardíaco
                </div>
                <div class="text-primaria-claro font-montserrat text-2xl font-light">92</div>
              </div>
            </div>
          </div>
          <div class="w-[234.5px] h-full flex-shrink-0 whitespace-normal select-none px-1">
            <div class="relative cursor-pointer card-shadow bg-white flex flex-col rounded-lg border border-white mb-5 hover:border-primaria-claro">
              <span class="absolute top-6 right-4 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-check text-primaria-claro"><path d="M16 5L7.7051 14.2166C7.32183 14.6424 6.65982 14.6598 6.2547 14.2547L3 11"></path></svg>
              </span>
              <div class="p-8 h-100 flex flex-col justify-between card-shadow items-center">
                <div class="w-16 h-16 rounded-full flex justify-center items-center border border-primaria-claro">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-blood text-primaria-claro"><ellipse cx="6.49996" cy="5.99999" rx="4.5" ry="4" transform="rotate(-30 6.49996 5.99999)"></ellipse><path d="M7.799 5.25C8.07515 5.72829 7.7174 6.45181 6.99997 6.86603C6.28253 7.28024 5.47707 7.22829 5.20093 6.75"></path><ellipse cx="13.3819" cy="14.0284" rx="4.5" ry="4" transform="rotate(15 13.3819 14.0284)"></ellipse><path d="M14.8308 14.4166C14.6879 14.9501 13.9233 15.2087 13.1231 14.9943C12.3229 14.7799 11.7901 14.1736 11.933 13.6401"></path></svg>                </div>
                <div class="text-center mb-0 h-16 flex items-center">
                  Pressão <br> Arterial
                </div>
                <div class="text-primaria-claro font-montserrat text-2xl font-light">115/74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { mapActions, mapState } from "vuex";

export default {
  mounted() {
    this.ActionSetPacientSelected(this.$route.params.id)
  },
  computed: {
    ...mapState('pacientes', ['pacientSelected'])
  },
  methods: {
    ...mapActions('pacientes', ['ActionSetPacientSelected'])
  },
  components: { NavbarComp, HeaderComp },
};
</script>
