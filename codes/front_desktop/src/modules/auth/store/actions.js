import * as types from './mutation-types'
import api from '@/service/index'
import {
  setLocalToken, deleteLocalToken, getLocalToken,
  setLocalUser, getLocalUser, deleteLocalUser
} from '../storage';

export const ActionLogin = async ({ dispatch }, payload) => {
  api.post('login', payload).then(async (res) => {
    dispatch('ActionSetToken', res.data.token)
    dispatch('ActionSetUser', res.data.users)
    dispatch('SetLogged', true)
  });
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = getLocalToken()
  const user = getLocalUser()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', token)
  dispatch('ActionSetUser', user)
}

export const ActionSetUser = ({ commit }, payload) => {
  const { name, sobrenome, imagem, isAdmin, id } = payload
  const user = { name, sobrenome, imagem, isAdmin, id }

  commit(types.SET_USER, user)
  setLocalUser(user)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
  setLocalToken(payload)
}

export const ActionSignOut = ({ dispatch }) => {
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', null)
  dispatch('SetLogged', false)
  deleteLocalToken()
  deleteLocalUser()
}

export const SetLogged = ({ commit }, payload) => {
  commit(types.SET_ISLOGGED, payload)
}