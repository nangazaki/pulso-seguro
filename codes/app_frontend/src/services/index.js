import axios from "axios"

const $axios = axios.create({
  baseURL: "http://localhost:8000/api",
})

const header = {
  "Accept": "application/json",
  "Content-Type": "application/json",
}


export const fetch_home = async () => {
  const response = await $axios.get()
}

export const fetch_estatisticas = async () => {
  const response = await $axios.get()
}

export const fetch_apontamentos = async () => {
  const response = await $axios.get()
}

export const fetch_doctors = async (url) => {
  const response = await $axios.get(url, header)
  return response.data
}

export const post_doctors = async (url, data) => {
  const response = await $axios.get(url, data, header)
  return response.data
}

export const fetch_pacientes = async () => {
  const response = await $axios.get()
}

export async function getData(route) {
  const baseURL = `http://localhost:8000/api/${route}`
  const response = await axios.get(baseURL)
  return response.data
}

export async function getDataWithToken(route, token) {
  const baseURL = `http://localhost:8000/api/${route}`
  const http = {
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  }
  const headres = new Headers(http)
  const response = await axios.post(baseURL, headres)
  return response.data
}

export default api