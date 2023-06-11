import { authStore } from "@/store/authStore"

export default async (to, from, next) => {
  document.title = `${to.name} | Pulso Seguro`

  if (to.name !== 'Login' && !authStore().hasToken) {
    if (!to.meta.auth) {
      next()
      return;
    }
    try {
      await authStore().CheckToken()

      next({ name: to.name })
      return;
    } catch (err) {
      next({ name: 'Login' })
      return;
    }
  }

  if (to.name == 'Login' && authStore().hasToken) {
    next({ name: 'Dashboard' })
    return;
  }

  next()
}