<template>
  <div class=" w-full h-screen absolute right-0 top-0 bg-[#000000b3] flex items-center justify-center">
    <div class="w-[400px] h-auto bg-white rounded-md shadow-xl p-5 absolute wrap-text">
      <span class="font-montserrat text-2xl border-b mb-5 block">Eliminar Doctor!</span>
      <p class="w-full mb-4">
        Tens a certeza que queres eliminar o Doctor <br> <strong>{{ nomeMedico }} {{ sobrenomeMedico }}</strong>?
      </p>
      <div class="">
        <button class="px-4 py-2 rounded-sm bg-cinza-4 text-cinza-1 mr-3" 
          @click="ActionFecharModal({isVisible: false, doctorID: 0})"
        >
          Cancelar
        </button>
        <button class="px-4 py-2 rounded-sm bg-red-500 text-white" @click="ActionDeleteDoctor(modalDeleteDoctor.doctorID)">
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex"

export default {
  props: [''],
  computed: {
    ...mapState('dashboard', ['modalDeleteDoctor'])
  },
  methods: {
    ...mapActions('dashboard', ['ActionFecharModal']),
    ...mapActions('dashboard', ['ActionDeleteDoctor']),
  }
};
</script>