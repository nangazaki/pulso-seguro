export const getLocalToken = () => { return localStorage.getItem('jwtToken') }
export const deleteLocalToken = () => localStorage.removeItem('jwtToken')
export const setLocalToken = token => localStorage.setItem('jwtToken', token)

export const setLocalUser = user => {
  localStorage.setItem('name', user.name)
  localStorage.setItem('sobrenome', user.sobrenome)
  localStorage.setItem('imagem', user.imagem)
  localStorage.setItem('id', user.id)
  localStorage.setItem('isAdmin', user.isAdmin)
}
export const getLocalUser = () => { 
  const user = {
    name: localStorage.getItem('name'),
    sobrenome: localStorage.getItem('sobrenome'),
    imagem: localStorage.getItem('imagem'),
    id: localStorage.getItem('id'),
    isAdmin: localStorage.getItem('isAdmin'),
  } 

  return user
}
export const deleteLocalUser = () => {
    localStorage.removeItem('name'),
    localStorage.removeItem('sobrenome'),
    localStorage.removeItem('imagem'),
    localStorage.removeItem('id'),
    localStorage.removeItem('isAdmin')
}

export const configPost = {
  'headers': {
    "Accept": "*/*",
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${getLocalToken()}`
  }
}

export const config = {
  'headers': {
    "Accept": "application/json",
    "Authorization": `Bearer ${getLocalToken()}`
  }
}