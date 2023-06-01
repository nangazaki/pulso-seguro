import { defineStore } from "pinia";

import { fetch_estatisticas } from "@/services";

export const estatsStore = defineStore('estats', {
  state: () => {
    return {
      estatisticas: [],
      porMes: undefined,
      medicosGenero: undefined,
      pacientesGenero: undefined,
      pacientesIdade: undefined,
      outro: undefined,
      usuarios: {
        total: undefined,
        medicos: undefined,
        pacientes: undefined
      }
    }
  },

  getters: {
    setPorMes(data) {
      this.porMes = data
    },

    doctoresGenero(state) {
      return state.medicosGenero
    },
    pacientesporIdade(state) {
      return state.pacientesGenero
    },
    getAdicionados(state) {
      return state.porMes
    }
  },

  actions: {
    // Metodo para Pegar os Pacientes da BD
    async PegarEstatisticas() {
      const response = await fetch_estatisticas()

      const [um, dois, tres, quatro, cinco, seis, sete] = response

      this.porMes = um
      const test = Object.values(this.porMes)

      this.porMes = test
      this.outro = dois
      this.medicosGenero = tres
      this.pacientesIdade = quatro
      this.setUsuarios(cinco, seis, sete)

      this.estatisticas = response
    },

    setUsuarios(pacientes, medicos, total) {
      this.usuarios.total = total
      this.usuarios.medicos = medicos
      this.usuarios.pacientes = pacientes
    },

    ReturnPorMes() {
      return this.porMes
    }
  }
})