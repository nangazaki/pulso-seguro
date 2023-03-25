import api from '@/service'
import * as types from './mutation-types'
import { config } from '@/modules/auth/storage'

// Metodo para Pegar os Pacientes da BD
export const ActionGetPacientsList = ({ dispatch }, user) => {
  if (user.isAdmin) {
    return api.get("pacientes", config).then(res => {
      dispatch('ActionSetPacientList', res.data)
    })
  }
  else {
    return api.get(`medicos/pacientes/${user.id}`, config).then(res => {
      dispatch('ActionSetPacientList', res.data)
    })
  }
}

// Metodos para Guardar os Pacientes na Store
export const ActionSetPacientList = ({ commit }, pacientList) => {
  commit(types.SET_PACIENTS_LIST, pacientList)
}

// Metodos para Selecionar Paciente a ser visto
export const ActionSetPacientSelected = ({ commit }, pacient) => (
  api.get(`pacientes/${pacient}`, config).then(res => {
    commit(types.SET_PACIENT_SELECTED, res.data)
  })
)

// Metodos para Adicionar um Novo Paciente
export const ActionPostPacient = (payload, dataPacient) => (
  api.post('pacientes', dataPacient).then((res) => {
    return res.status
  })
)

// Metodos em fase de teste
export const ActionGetDoctorOfPacient = ({ commit }, payload) => (
  api.get(`/medicos/${payload}`, config).then(res => {
    commit(types.SET_DOCTOR_OF_PACIENT, res.data)
  })
)


// Metodos para a manipulacao do Modal do Paciente
// Metodo para selecionar paciente
export const selectPacientDelete = ({ commit }, setPacient) => {
  commit(types.SET_MODAL_DELETE, setPacient)
}

// Metodo para cancelar a selecao de paciente
export const cancelPacientDelete = ({ commit }, resetValues) => {
  commit(types.SET_MODAL_DELETE, resetValues)
}

// Metodo para deletar paciente
export const deletePacientDelete = (payload, id) => {
  (
    api.delete(`pacientes/${id}`, config)
  )
}


// Modal para confirmar a adiccao de paciente novo
export const setModalPacient = ({ commit }, value) => {
  console.log(value)
  commit(types.SET_MODAL_PACIENTE, value)
}

