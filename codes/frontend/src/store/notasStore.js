import { defineStore } from "pinia"

export const notasStore = defineStore('notas', {
  state: () => {
    return {
      newNotesModal: false
    }
  },
  getters: {
    getNewNotesModal(state) {
      return state.newNotesModal
    }
  },
  actions: {
    openNewNotesModal() {
      this.newNotesModal = true
    },
    closeNewNotesModal() {
      console.log("Teste")
      this.newNotesModal = false
    }
  }
})