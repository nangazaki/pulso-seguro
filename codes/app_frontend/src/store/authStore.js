import { defineStore } from "pinia";
import { fetch_login, fetch_me } from "@/services";
import { setLocalToken, removeToken } from '@/utils/storage'

export const authStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      token: "",
      isLogged: false,
      navbar: false,
      menuUser: false,
    }
  },

  getters: {
    hasToken(state) {
      return !!state.token
    },

    getMenuUser(state) {
      return state.menuUser
    },

    getNavbar(state) {
      return state.navbar
    }
  },

  actions: {
    async Login(user) {
      const response = await fetch_login(user)

      if (response.status != 200) {
        return 'Não foi possível iniciar sessão!'
      }

      setLocalToken(response.data.token)
      this.user = response.data.users
      this.token = response.data.token
      this.isLogged = true

      return response.status
    },

    CheckToken() {
      if (this.hasToken) {
        return Promise.resolve(this.token)
      }

      // const token = getLocalToken()
      // const user = getLocalUser()

      if (!token) {
        return Promise.reject(new Error('Token Inválido'))
      }

      dispatch('ActionSetToken', token)
      this.SetUser(user)
    },

    SetUser(user) {
      const { bairro, id, provincia, genero, name, imagem, rua,
        nBI, telefone, isAdmin, especialidade, email, usuario,
        municipio, sobrenome, dataNascimento } = user

      const userData = {
        bairro, id, provincia, genero, name, imagem, rua,
        nBI, telefone, isAdmin, especialidade, email, usuario,
        municipio, sobrenome, dataNascimento
      }

      this.user = userData
      // setLocalUser(user)
    },

    SetToken(token) {
      this.token = token
    },

    SignOut() {
      this.user = {}
      this.SetToken(null)
      this.SetLogged(false)
      removeToken()

      // deleteLocalUser()
    },

    SetLogged(set) {
      this.isLogged = set
    },

    async RefreshSession() {
      const me = await fetch_me()

      console.log(me)
    },

    Navbar(act) {
      this.navbar = act;
    },

    MenuUser(act) {
      this.menuUser = act;
    },
  },


})