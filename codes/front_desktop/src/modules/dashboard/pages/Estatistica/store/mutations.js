import * as types from './mutation-types'

export default {
    [types.SET_ESTATISTICAS_DADOS] (state, payload) {
        state.isVisibleModal = payload
    },
}