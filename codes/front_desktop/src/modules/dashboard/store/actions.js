import * as types from './mutation-types'

export const ActionChangeNavbar = ({ commit }, payload) => {
  commit(types.SET_NAVBAR, payload)
}
