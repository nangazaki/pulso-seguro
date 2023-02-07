import * as types from './mutation-types'

export default {
    [types.SET_MODAL] (state, payload) {
        state.modalDeleteDoctor = payload
    },
}