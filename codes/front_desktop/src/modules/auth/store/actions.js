import * as types from './mutation-types'
import api from '@/service/index'
import { setLocalToken, deleteLocalToken } from '../storage';

export const ActionLogin = ({ dispatch }, payload) => {
  api.post('login', payload).then((res) => {
    dispatch('ActionSetToken', res.data.token)
  });
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
  setLocalToken(payload)
}

export const ActionSignOut = ({ dispatch }) => {
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
  deleteLocalToken()
}