import { defineStore } from "pinia";
import { fetch_login, fetch_me } from "@/services";
import { fetch_doctor } from "@/services/doctorServices"
import { getLocalToken, getLocalUser, setLocalToken, setLocalUser, removeToken } from '@/utils/storage'

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
    getUser(state) {
      return state.user
    },

    getIsAdmin(state) {
      return !!state.user.isAdmin
    },

    hasToken(state) {
      return !!state.token
    },

    getMenuUser(state) {
      return state.menuUser
    },

    getNavbar(state) {
      return state.navbar
    },

    getApontamentos(state) {
      return state.user.apontamentos
    }
  },

  actions: {
    async Login(user) {
      const response = await fetch_login(user)

      if (response.status !== 200) {
        return response.status;
      }

      this.SetLocalData(response.data)
      this.user = response.data.users
      this.token = response.data.token
      this.isLogged = true

      return response.data.users
    },

    CheckToken() {
      if (this.hasToken) {
        return Promise.resolve(this.token)
      }

      const token = getLocalToken()
      const { id, isAdmin } = getLocalUser()

      if (!token) {
        return Promise.reject(new Error('Token Inválido'))
      }

      this.SetToken(token)
      this.RefreshSession(id, isAdmin)
    },

    SetLocalData(data) {
      setLocalUser(data.users)
      setLocalToken(data.token)
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

    async RefreshSession(id, isAdmin) {
      if (isAdmin == 1) {
        const me = await fetch_me(id)
        this.user = me.data
        return;
      }

      const me = await fetch_doctor(id)
      this.user = me.data
      return;
    },

    Navbar(act) {
      this.navbar = act;
    },

    MenuUser(act) {
      this.menuUser = act;
    },
  },


})