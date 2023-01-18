import * as types from './mutation-types'
import api from '@/service/api'

export const ActionLogin = ({ dispatch }, payload) => {
    return api.post('login', { payload }).then(resolve => {
        dispatch('ActionSetUser', resolve.data.user)
        dispatch('ActionSetToken', resolve.data.token)
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}