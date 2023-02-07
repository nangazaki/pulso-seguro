import api from '@/service/api'
import * as types from './mutation-types'

export const ActionSetPacientsList = ({ commit }) => (
  api.get("/api/pacientes").then(res => {
    commit(types.SET_PACIENTS_LIST, res.data)
  })
)

export const ActionSetPacientSelected = ({ commit }, payload) => (
  api.get(`/api/pacientes/${payload}`).then(res => {
    commit(types.SET_PACIENT_SELECTED, res.data)
  })
)

export const ActionPostPacient = (form) => {
  console.log(form)
}