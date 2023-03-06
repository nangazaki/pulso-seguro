
export const getLocalToken = () => { return localStorage.getItem('jwtToken') }
export const deleteLocalToken = () => localStorage.removeItem('jwtToken')
export const setLocalToken = token => localStorage.setItem('jwtToken', token)

export const configPost = {
  'headers': {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${getLocalToken()}`
  }
}

export const config = {
  'headers': {
    "Accept": "application/json, text/plain, */*",
    "Authorization": `Bearer ${getLocalToken()}`
  }
}