import api from '@/service'
import * as types from './mutation-types'
import { config, configPost } from '@/modules/auth/storage'

export const ActionGetPacientsList = ({ dispatch }) => (
  api.get("pacientes", config).then(res => {
    dispatch('ActionSetPacientList', res.data)
  })
)

export const ActionSetPacientList = ({ commit }, payload) => {
  commit(types.SET_PACIENTS_LIST, payload)
}

export const ActionSetPacientSelected = ({ commit }, payload) => (
  api.get(`pacientes/${payload}`, config).then(res => {
    commit(types.SET_PACIENT_SELECTED, res.data)
  })
)

export const ActionPostPacient = (payload, values) => (
  api.post('pacientes', values, configPost).then((res) => {
    console.log(res)
  })
)

export const ActionGetDoctorOfPacient = ({ commit }, payload) => (
  api.get(`/medicos/${payload}`, config).then(res => {
    commit(types.SET_DOCTOR_OF_PACIENT, res.data)
  })
)

export const selectPacientDelete = ({ commit }, setPacient) => {
  commit(types.SET_MODAL_DELETE, setPacient)
}

export const cancelPacientDelete = ({ commit }, resetValues) => {
  commit(types.SET_MODAL_DELETE, resetValues)
}

export const deletePacientDelete = (payload, id) => {(
  api.delete(`pacientes/${id}`, config)
)}

