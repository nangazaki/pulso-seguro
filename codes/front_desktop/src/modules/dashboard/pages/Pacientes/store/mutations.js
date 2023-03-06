import * as types from './mutation-types'

export default {
    [types.SET_PACIENTS_LIST] (state, payload) {
        state.pacientsList = payload
    },
    [types.SET_PACIENT_SELECTED] (state, payload) {
        state.pacientSelected = payload
    },
    [types.SET_DOCTOR_OF_PACIENT] (state, payload) {
        state.doctorOfPacient = payload
    },
    [types.SET_MODAL_DELETE] (state, payload) {
        state.modalPacient = payload
    }
}