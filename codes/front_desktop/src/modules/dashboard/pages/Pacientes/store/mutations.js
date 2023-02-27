import * as types from './mutation-types'

export default {
    [types.SET_PACIENTS_LIST] (state, payload) {
        state.pacientsList = payload
    },
    [types.SET_PACIENT_SELECTED] (state, payload) {
        state.pacientSelected = payload
    },
}