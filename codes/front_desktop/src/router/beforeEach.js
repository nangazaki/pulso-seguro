import store from "../store"

export default async (to, from, next) => {
  document.title = `${to.name} - Pulso Seguro`

  if (to.name !== 'Login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')

      next({ name: to.name })
    } catch (error) {
      next({ name: 'Login' })
    }
  } else {
    if (to.name == 'Login' && store.getters['auth/hasToken']) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
}