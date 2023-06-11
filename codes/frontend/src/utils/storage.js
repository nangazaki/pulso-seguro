
export const setLocalToken = (token) => localStorage.setItem('pulso__seguro__token', token)

export const getLocalToken = () => localStorage.pulso__seguro__token

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const setLocalUser = (user) => {
  const { id, isAdmin } = user
  localStorage.setItem("pulso__seguro__id", id)
  localStorage.setItem("pulso__seguro__isAdmin", isAdmin)
  localStorage.setItem("pulso__seguro__session", true)
}

export const getLocalUser = () => {
  const id = localStorage.getItem("pulso__seguro__id")
  const isAdmin = localStorage.getItem("pulso__seguro__isAdmin")

  return { id, isAdmin }
}

export const removeLocalUser = () => {
  localStorage.clear()
}