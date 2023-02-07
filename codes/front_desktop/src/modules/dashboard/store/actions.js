

import * as types from './mutation-types'

export const ActionAbrirModal = ({ commit }, payload) => {
  commit(types.SET_MODAL, payload)
}

export const ActionFecharModal = ({ commit }, payload) => {
  commit(types.SET_MODAL, payload)
}

// eslint-disable-next-line no-unused-vars
export const ActionDeleteDoctor = ({ commit }, payload) => {
  console.log(payload)
}