
export const setLocalToken = (token) => localStorage.setItem('token', token)

export const getLocalToken = () => localStorage.token

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const setLocalUser = (user) => {
  const { id, isAdmin } = user
  localStorage.setItem("__id", id)
  localStorage.setItem("__isAdmin", isAdmin)
}

export const getLocalUser = () => {
  const id = localStorage.getItem("__id")
  const isAdmin = localStorage.getItem("__isAdmin")

  return { id, isAdmin }
}

export const removeLocalUser = () => {
  localStorage.clear()
}