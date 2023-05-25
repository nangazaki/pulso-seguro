import { authStore } from "@/store/authStore"

export default async (to, from, next) => {
  document.title = `${to.name} | Pulso Seguro`

  if (to.name !== 'Login' && !authStore().hasToken) {
    try {
      await authStore().CheckToken()

      next({ name: to.name })
    } catch (err) {
      next({ name: 'Login' })
    }
  }

  if (to.name == 'Login' && authStore().hasToken) {
    next({ name: 'dashboard' })
  }

  next()
}