import { $axios, headers } from "./index"

/**
 * 
 *  Metodos para Pacientes
 * 
 */
export const fetch_pacientes = async (url) => {
  const response = await $axios.get(url, headers)

  // if (response.response.status === 401) {
  //   alert('Erro')
  // }
  return response
}

export const fetch_paciente = async (id) => {
  const response = await $axios.get(`pacientes/${id}`, headers)

  return response
}

export const delete_paciente = async (id) => {
  const response = await $axios.delete(`pacientes/${id}`, headers)

  return response
}

export const post_paciente = async (data) => {
  const response = await $axios.post('/pacientes', data, headers).catch(error => {
    return 422;
  })

  return response
}

export const patch_paciente = async (id, data) => {
  const response = await $axios.post(`/pacientes/${id}`, data, headers).catch(error => {
    return 422;
  })

  return response
}
