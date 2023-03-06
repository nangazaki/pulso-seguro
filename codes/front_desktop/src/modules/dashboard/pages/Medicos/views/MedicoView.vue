<template>
  <NavbarComp />
  <main>
    <HeaderComp />

    <h1 class="font-montserrat mb-8 pl-2 text-2xl text-cinza-1">
      Lista de Medicos
    </h1>

    <div class="h-[40px] flex justify-between mb-10">
      <router-link to="/lista-medicos/adicionar-medico"
        class="bg-primaria-claro px-4 py-2 flex items-center gap-2 rounded-md text-branco-claro"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path>
          </svg>
        </span>
        <span>Adicionar Doctor</span>
      </router-link>

      <div class="flex gap-8">
        <div class="bg-white flex items-center rounded-md w-100 h-full overflow-hidden card-shadow">
          <input
            class="h-full w-[86%] px-2 focus:border-none"
            placeholder="Pesquisar..."
          />
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-search undefined">
              <circle cx="9" cy="9" r="7"></circle>
              <path d="M14 14L17.5 17.5"></path>
            </svg>
          </span>
        </div>

        <button
          class="bg-white h-full flex gap-2 items-center rounded-md px-2 py-1 text-cinza-3 card-shadow hover:text-primaria-claro"
        >
          Exportar PDF
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acorn-icons acorn-icons-download undefined">
              <path d="M2 14V14.5C2 15.9045 2 16.6067 2.33706 17.1111C2.48298 17.3295 2.67048 17.517 2.88886 17.6629C3.39331 18 4.09554 18 5.5 18H14.5C15.9045 18 16.6067 18 17.1111 17.6629C17.3295 17.517 17.517 17.3295 17.6629 17.1111C18 16.6067 18 15.9045 18 14.5V14"></path>
              <path d="M14 10 10.7071 13.2929C10.3166 13.6834 9.68342 13.6834 9.29289 13.2929L6 10M10 2 10 13"></path>
            </svg>
          </span>
        </button>

        <select class="w-20 h-full bg-branco-claro p-2 rounded-md card-shadow">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>

    <div class="flex justify-evenly mb-8 flex-wrap">
      <MedicoItem
        v-for="(doctor, index) in doctorsList"
        :key="index"
        :doctor="doctor"/>
    </div>

    <ModalComp />
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import MedicoItem from '../components/MedicoItem.vue';
import ModalComp from '../components/ModalComp.vue';

export default {
  components: { NavbarComp, HeaderComp, MedicoItem, ModalComp },
  
  data() {
    return {
      option: 1,
    };
  },
  
  mounted() {
    this.ActionDoctorsList();
  },
  
  computed: {
    ...mapState("medicos", ["doctorsList"]),
  },
  
  methods: {
    ...mapActions("medicos", ["ActionDoctorsList"]),
  },
};
</script>