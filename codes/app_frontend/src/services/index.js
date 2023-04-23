import axios from "axios"
import { getLocalToken } from "@/utils/storage"

export const $axios = axios.create({
  baseURL: "http://localhost:8000/api",
})

const token = getLocalToken()

// Configuração dos Headers
export const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
})


export const fetch_login = async (user) => {
  const response = await $axios.post("/login", user)

  const data = response.data
  const status = response.status

  return { data, status }
}

export const fetch_me = async () => {
  const response = await $axios.post('me', headers)

  return response
}

export const fetch_estatisticas = async () => {
  const response = await $axios.get('estatisticas')
  return response.data
}

export const fetch_apontamentos = async () => {
  const response = await $axios.get()
}

