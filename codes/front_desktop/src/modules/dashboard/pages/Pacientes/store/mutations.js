import * as types from './mutation-types'

export default {
    [types.SET_MODAL] (state, payload) {
        state.isVisibleModal = payload
    },
    [types.SET_DOCTORS_LIST] (state, payload) {
        state.doctorsList = payload
    },
    [types.SET_DOCTOR_SELECTED] (state, payload) {
        state.doctorSelected = payload
    },
    [types.SET_PACIENTS_LIST] (state, payload) {
        state.pacientsList = payload
    },
    [types.SET_PACIENT_SELECTED] (state, payload) {
        state.pacientSelected = payload
    },
}