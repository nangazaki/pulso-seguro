import { defineStore } from "pinia";
import { fetch_login, fetch_me } from "@/services";
import { fetch_doctor, patch_doctor } from "@/services/doctorServices"

import { getLocalToken, getLocalUser, setLocalToken, setLocalUser, removeToken, removeLocalUser } from '@/utils/storage'

export const authStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      notifications: [],
      modalNotification: false,
      token: "",
      isLogged: false,
      navbar: false,
      menuUser: false,
      menuConfigUser: [
        'editar-informações-pessoais', 'editar-informações-acesso'
      ],
      menuConfigUserSelected: 'editar-informações-pessoais'
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

    getModalNotification(state) {
      return state.modalNotification
    },

    getApontamentos(state) {
      return state.user.apontamentos
    },

    getNotifications(state) {
      return state.notifications
    },

    getHasNotifications(state) {
      const count = state.notifications.reduce((count, notification) => {
        if (!notification.lida) {
          return count + 1;
        }

        return 0;
      }, 0);

      return count;
    },

    getConfigSelected(state) {
      return state.menuConfigUserSelected;
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
      this.SetLogged(true)

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
      this.SetLogged(true)
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
      removeLocalUser()

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

    hasNotifications() {
      const countNotifications = this.notifications.reduce((count, notification) => {
        if (!notification.lida) {
          return count + 1;
        }

        return 0;
      }, 0);

      return countNotifications;
    },

    openNotification(id) {
      const position = id - 1;

      if (this.notifications[position].lida == false) {
        this.notifications[position].lida = true;
      }
    },

    openModalNotification(action) {
      this.modalNotification = action
    },

    addNotificationTemp(n) {
      const id = this.notifications.length + 1

      if (n < 36) {
        this.notifications.push({
          id: id,
          message: "Paciente Joana Mendonça está a ter uma queda na temperatura.",
          lida: false,
        })
      }

      if (n > 38) {
        this.notifications.push({
          id: id,
          message: "Paciente Joana Mendonça está a ter uma subida drástica na temperatura.",
          lida: false,
        })
      }
    },

    addNotificationBpm(n) {
      const id = this.notifications.length + 1

      if (n < 60) {
        this.notifications.push({
          id: id,
          message: "Paciente Joana Mendonça está a ter uma queda nos batimentos cardíacos.",
          lida: false,
        })
      }

      if (n > 100) {
        this.notifications.push({
          id: id,
          message: "Paciente Joana Mendonça está a ter uma subida drástica nos batimentos cardíacos.",
          lida: false,
        })
      }
    },

    selectMenuConfig(id) {
      this.menuConfigUserSelected = this.menuConfigUser[id]
    },

    async updatePersonalData(data, user) {
      user.name = data.name
      user.sobrenome = data.sobrenome
      user.provincia = data.provincia
      user.municipio = data.municipio
      user.bairro = data.bairro
      user.rua = data.rua
      user.nBI = data.nBI
      user.telefone = data.telefone
      user.dataNascimento = data.dataNascimento
      user.genero = data.genero

      const formData = new FormData();

      formData.append("_method", "patch");
      formData.append("name", user.name);
      formData.append("sobrenome", user.sobrenome);
      formData.append("provincia", user.provincia);
      formData.append("municipio", user.municipio);
      formData.append("bairro", user.bairro);
      formData.append("rua", user.rua);
      formData.append("nBI", user.nBI);
      formData.append("telefone", user.telefone);
      formData.append("dataNascimento", user.dataNascimento);
      formData.append("genero", user.genero);
      formData.append("especialidade", user.especialidade);
      formData.append("idCarteira", user.idCarteira);
      formData.append("usuario", user.usuario);
      formData.append("email", user.email);

      const response = await patch_doctor(user.id, formData)

      console.log(response)

      return response
    },

    async updatePersonalDataAccess(data, user) {
      user.email = data.email
      user.usuario = data.usuario
      user.password = data.password

      const formData = new FormData();

      formData.append("_method", "patch");
      formData.append("name", user.name);
      formData.append("sobrenome", user.sobrenome);
      formData.append("provincia", user.provincia);
      formData.append("municipio", user.municipio);
      formData.append("bairro", user.bairro);
      formData.append("rua", user.rua);
      formData.append("nBI", user.nBI);
      formData.append("telefone", user.telefone);
      formData.append("dataNascimento", user.dataNascimento);
      formData.append("genero", user.genero);
      formData.append("especialidade", user.especialidade);
      formData.append("idCarteira", user.idCarteira);
      formData.append("usuario", user.usuario);
      formData.append("email", user.email);
      formData.append("password", user.password)

      const response = await patch_doctor(user.id, formData)

      console.log(response)

      return response
    }
  },
})