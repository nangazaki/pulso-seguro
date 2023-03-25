import * as types from './mutation-types'

export default {
    [types.SET_NAVBAR] (state, payload) {
        state.navbar = payload
    },
}