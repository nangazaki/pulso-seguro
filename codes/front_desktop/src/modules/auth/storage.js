
export const getLocalToken = () => localStorage.getItem('jwtToken')
export const deleteLocalToken = () => localStorage.removeItem('jwtToken')
export const setLocalToken = token => localStorage.setItem('jwtToken', token)

export const config = {
  'headers': {
    "Accept": "application/json, text/plain, */*",
    "Authorization": `Bearer ${getLocalToken()}`
  }
}