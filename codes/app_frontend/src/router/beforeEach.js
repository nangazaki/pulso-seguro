import { authStore } from "../modules/auth/store"

const AuthStore = authStore()

export default async (to, from, next) => {
  document.title = `${to.name} - Pulso Seguro`

  if (to.name !== 'Login' && !AuthStore.hasToken) {
    try {
      await AuthStore.CheckToken()

      next({ name: to.name })
    } catch (error) {
      next({ name: 'Login' })
    }
  } else {
    if (to.name == 'Login' && AuthStore.hasToken) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
}