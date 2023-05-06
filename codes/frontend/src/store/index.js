import { defineStore } from 'pinia'

import { authStore } from "./authStore"
import { doctorStore } from "./doctorStore"
import { estatsStore } from "./estatsStore"
import { pacienteStore } from "./pacienteStore"

const modules = {
  auth: authStore(),
  doctor: doctorStore(),
  estats: estatsStore(),
  paciente: pacienteStore()
}

export const useRootStore = defineStore('root', {
  modules
})