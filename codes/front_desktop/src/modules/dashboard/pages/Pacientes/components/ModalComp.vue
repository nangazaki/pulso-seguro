<template>
  <div v-if="modalPacient.visible"
    class="w-full h-screen absolute right-0 top-0 bg-[#000000b3] flex 
    items-center justify-center transition ease-in"
  >
    <div class="w-[400px] h-auto bg-white rounded-md shadow-xl p-5 
      absolute wrap-text modal-enter"
    >
      <span class="font-montserrat text-2xl border-b mb-5 block"
        >Eliminar Paciente!</span
      >
      <p class="w-full mb-4">
        Tens a certeza que queres eliminar o Paciente
        <br />
        <strong>{{ modalPacient.paciente.name }}</strong>?
      </p>
      <div class="">
        <button @click="fecharModal"
          class="px-4 py-2 rounded-sm bg-cinza-5 text-cinza-1 mr-3 transition ease-in hover:bg-cinza-4"
        >
          Cancelar
        </button>
        <button @click="deletePaciente"
          class="px-4 py-2 rounded-sm bg-red-500 text-white transition ease-in hover:bg-red-600"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState('pacientes', ['modalPacient'])
  },
  methods: {
    ...mapActions("pacientes", ["cancelPacientDelete", "deletePacientDelete"]),
    
    fecharModal() {
      let values = {
        visible: false,
        pacient: {
          id: undefined,
          name: undefined
        }
      }
      this.cancelPacientDelete(values)
    },

    async deletePaciente () {
      await this.deletePacientDelete(this.modalPacient.paciente.id)
        .then(() => {
          this.$router.go()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
};
</script>