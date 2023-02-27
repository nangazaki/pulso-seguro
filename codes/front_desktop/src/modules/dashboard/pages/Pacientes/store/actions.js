import api from '@/service'
import * as types from './mutation-types'
import { config } from '@/modules/auth/storage'

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

export const ActionPostPacient = (payload) => (
  api.post('pacientes', payload, config).then((res) => {
    console.log(res.status)
  })
)