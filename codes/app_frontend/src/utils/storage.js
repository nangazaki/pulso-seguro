
export const setLocalToken = (token) => localStorage.setItem('token', token)

export const getLocalToken = () => localStorage.token

export const removeToken = () => {
  localStorage.removeItem('token')
}
