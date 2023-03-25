<template>
  <NavbarComp />
  <main class="h-screen w-full p-8 overflow-auto">
    <HeaderComp />

    <div class="w-full flex gap-8 my-8">
      <div class="min-w-[400px] p-8 bg-white rounded-md card-shadow">
        <div class="mb-4 flex items-center flex-col">
          <div class="w-32 h-32 relative mb-3 rounded-full overflow-hidden">
            <img
            :src="`http://localhost:8000/storage/${doctorSelected.imagem}`"
              class="block w-full"
              alt="Foto de perfil"
            />
          </div>
          <span class="font-montserrat text-lg mb-0">{{ doctorSelected.name }} {{ doctorSelected.sobrenome }}</span>
          <span class="text-cinza-3 mb-2">{{ doctorSelected.especializacao }}</span>
          <span class="text-cinza-3 text-center mb-2">
            Sugar plum marshmallow apple pie caramels fruitcake tart dessert
            jelly beans pudding.
          </span>
          <div class="flex flex-row justify-center gap-3 w-full">
            <button type="button" class="cursor-pointer px-4 py-2 bg-primaria-claro me-2 rounded-md text-white">
              Appointment
            </button>
            <button type="button" class="cursor-pointer px-4 py-2 bg-white me-2 rounded-md text-primaria-claro border border-primaria-claro hover:bg-primaria-claro hover:text-white">
              Review
            </button>
          </div>
        </div>
      </div>
      <div class="w-full p-8 bg-white rounded-md card-shadow">
        <h2 class="text-primaria-claro font-montserrat mb-4">Pacientes</h2>
        <div class="flex flex-col gap-4">
          <MedicoPaciente v-for="(paciente, i) in doctorSelected.pacientes" 
            :key="i" :paciente="paciente" />
        </div>
      </div>
    </div>
  <div class="w-full flex gap-8 my-8">

  </div>
  </main>
</template>
  
<script>
import { mapActions, mapState } from "vuex"
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import MedicoPaciente from "../components/MedicoPaciente.vue";

export default {
  computed: {
    ...mapState('medicos', ['doctorSelected'])
  },
  mounted() {
    this.ActionSetDoctorSelected(this.$route.params.id)
  },
  methods: {
    ...mapActions('medicos', ['ActionSetDoctorSelected'])
  },
  components: { NavbarComp, HeaderComp, MedicoPaciente },
};
</script>