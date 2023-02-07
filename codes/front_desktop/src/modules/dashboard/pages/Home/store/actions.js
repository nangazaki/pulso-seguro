import api from '@/service/api'
import * as types from './mutation-types'

export const toggleModal = ({ commit }, payload) => {
  commit(types.SET_MODAL, payload)
}

export const ActionSetDoctorsList = ({ commit }) => (
  api.get("/api/medicos").then(res => {
    commit(types.SET_DOCTORS_LIST, res.data)
  })
)

export const ActionSetDoctorSelected = ({ commit }, payload) => (
  api.get(`/api/medicos/${payload}`).then(res => {
    commit(types.SET_DOCTOR_SELECTED, res.data)
  })
)

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