import { $axios } from "./index"

/**
 * 
 *  Metodos para Doctores
 * 
 */
export const fetch_doctores = async () => {
  const response = await $axios.get('medicos')

  // if (response.response.status === 401) {
  //   alert('Erro')
  // }

  return response
}

export const fetch_doctor = async (id) => {
  const response = await $axios.get(`medicos/${id}`)

  return response
}

export const delete_doctor = async (id) => {
  const response = await $axios.delete(`medicos/${id}`)

  return response
}

export const post_doctor = async (data) => {
  const response = await $axios.post('/medicos', data)

  return response.status
}
