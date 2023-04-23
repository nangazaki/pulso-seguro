import { $axios } from "./index"

/**
 * 
 *  Metodos para Pacientes
 * 
 */
export const fetch_pacientes = async (url) => {
  const response = await $axios.get(url)

  // if (response.response.status === 401) {
  //   alert('Erro')
  // }

  return response
}

export const fetch_paciente = async (id) => {
  const response = await $axios.get(`pacientes/${id}`)

  return response
}

export const delete_paciente = async (id) => {
  const response = await $axios.delete(`pacientes/${id}`)

  return response
}

export const post_paciente = async (data) => {
  const response = await $axios.post('/pacientes', data)

  return response.status
}
