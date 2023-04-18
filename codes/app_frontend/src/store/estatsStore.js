import { defineStore } from "pinia";

import { fetch_estatisticas } from "@/services";

export const estatsStore = defineStore('estats', {
  state: () => {
    return {
      estatisticas: []
    }
  },

  getters: {
    doctoresGenero(state) {
      return state.estatisticas[2]
    },
    pacientesIdade(state) {
      return state.estatisticas[3]
    }
  },

  actions: {
    // Metodo para Pegar os Pacientes da BD
    async PegarEstatisticas() {
      const response = await fetch_estatisticas()
      this.estatisticas = response
    },
  }
})