import api from '@/service/api'
import * as types from './mutation-types'

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

export const ActionSetPacientsByDoctor = ({ commit }, payload) => (
  api.get(`/api/medicos/${payload}/pacientes`).then(res => {
    commit(types.SET_PACIENT_BY_DOCTOR, res.data)
  })
)