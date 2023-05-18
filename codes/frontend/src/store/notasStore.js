import { defineStore } from "pinia"
import { authStore } from "@/store/authStore"
import { post_apontamento } from "../services"

export const notasStore = defineStore('notas', {
  state: () => {
    return {
      newNotesModal: false,
      notas: []
    }
  },
  getters: {
    getNewNotesModal(state) {
      return state.newNotesModal
    },
    getNotes(state) {
      return state.notas
    }
  },
  actions: {
    openNewNotesModal() {
      this.newNotesModal = true
    },
    closeNewNotesModal() {
      this.newNotesModal = false
    },
    async AdicionarNota(nota) {
      const { id } = await authStore().getUser
      const { apontamento } = nota

      const apontamentos = {
        user_id: id,
        apontamento
      }

      const response = await post_apontamento(apontamentos)

      return response
    },
    async PegarNotas() {
      this.notas = await authStore().getApontamentos
    },
    RemoverNota() {

    }
  }
})