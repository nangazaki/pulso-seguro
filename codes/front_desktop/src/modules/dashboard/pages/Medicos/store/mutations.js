import * as types from './mutation-types'

export default {
    [types.SET_DOCTORS_LIST] (state, payload) {
        state.doctorsList = payload
    },
    [types.SET_DOCTOR_SELECTED] (state, payload) {
        state.doctorSelected = payload
    },
    [types.SET_PACIENT_BY_DOCTOR] (state, payload) {
        state.pacientsByDoctor = payload
    },
}