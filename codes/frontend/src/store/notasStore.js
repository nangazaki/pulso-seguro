import { defineStore } from "pinia"
import { authStore } from "@/store/authStore"
import { fetch_apontamentos, post_apontamento } from "../services"

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
      this.notas = await fetch_apontamentos()
    },
    PegarMinhasNotas(id) {
      console.log(id)
      const notas = this.notas.filter((nota, index) => {
        return nota.user_id == id
      })

      console.log(notas)
    },
    RemoverNota() {

    }
  }
})