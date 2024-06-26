import axios from "axios"
import { getLocalToken } from "@/utils/storage"

export const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const token = getLocalToken()

// Configuração dos Headers
export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
}

export const fetch_login = async (user) => {
  const _error = { code: false }
  const response = await $axios.post("/login", user).catch(error => {
    _error.code = error.response.status;
    return _error.code
  })

  if (_error.code) {
    return { status: _error.code };
  }

  const { data, status } = response

  return { data, status }
}

export const fetch_me = async (id) => {
  const response = await $axios.get(`/admins/${id}`, headers)

  return response
}

export const refresh_session = async () => {
  await $axios.post('/refresh')
}

export const fetch_estatisticas = async () => {
  const response = await $axios.get('estatisticas', headers)
  return response.data
}

export const post_apontamento = async (apontamento) => {
  const response = await $axios.post("/apontamentos", apontamento)

  return response
}

export const fetch_apontamentos = async () => {
  const response = await $axios.get("/apontamentos")

  return response.data
}

export const search_pacientes = async (paciente_name) => {
  const response = await $axios.get(`/pacientes?filtro=name:=:${paciente_name}`).catch(() => {
    return 422;
  })

  console.log(response)

  return response.data[0]
}

export const search_doctores = async (doctor_name) => {
  const response = await $axios.get(`/medicos?filtro=name:=:${doctor_name}`)
    .catch(() => {
      return 422;
    })



  console.log(response)

  const { data } = response

  return data
}
