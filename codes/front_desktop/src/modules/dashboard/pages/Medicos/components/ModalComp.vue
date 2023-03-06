<template>
  <div
    class="w-full h-screen absolute right-0 top-0 bg-[#000000b3] flex 
    items-center justify-center transition ease-in"
    v-show="modalDelete.visible"
  >
    <div
      class="w-[400px] h-auto bg-white rounded-md shadow-xl p-5 absolute wrap-text modal-enter"
    >
      <span class="font-montserrat text-2xl border-b mb-5 block"
        >Eliminar Doctor!</span
      >
      <p class="w-full mb-4">
        Tens a certeza que queres eliminar o Doctor {{ modalDelete.doctor.nome }}
        <br />
        <strong>{{ modalDelete.doctor.name }}</strong
        >?
      </p>
      <div class="">
        <button
          class="px-4 py-2 rounded-sm bg-cinza-5 text-cinza-1 mr-3 transition ease-in hover:bg-cinza-4"
          @click="fecharModal"
        >
          Cancelar
        </button>
        <button
          class="px-4 py-2 rounded-sm bg-red-500 text-white transition ease-in hover:bg-red-600"
          @click="deleteDoctor"
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
    ...mapState('medicos', ['modalDelete'])
  },
  methods: {
    ...mapActions("medicos", ["cancelDoctorDelete", "deleteDoctorDelete"]),
    
    fecharModal() {
      let values = {
        visible: false,
        doctor: {
          id: undefined,
          name: undefined
        }
      }
      this.cancelDoctorDelete(values)
    },

    async deleteDoctor () {
      await this.deleteDoctorDelete(this.modalDelete.doctor.id)
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