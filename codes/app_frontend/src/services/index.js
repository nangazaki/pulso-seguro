import axios from "axios"
import { getLocalToken } from "@/utils/storage"

const $axios = axios.create({
  baseURL: "http://localhost:8000/api",
})

const token = getLocalToken()

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
}


export const fetch_login = async (user) => {
  const response = await $axios.post("/login", user, headers)

  const data = response.data
  const status = response.status

  return { data, status }
}

export const fetch_me = async () => {
  let t = getLocalToken()
  const response = await $axios.post('me', {
    "Accept": "*/*",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${t}`,
    "Content-Type": "application/json",
  })

  return response
}

export const fetch_estatisticas = async () => {
  const response = await $axios.get('estatisticas')
  return response.data
}

export const fetch_apontamentos = async () => {
  const response = await $axios.get()
}

export const fetch_doctors = async (url) => {
  const response = await $axios.get(url, headers)
  return response
}

export const post_doctors = async (url, data) => {
  const response = await $axios.get(url, data, header)
  return response.data
}

export const fetch_pacientes = async (url) => {
  let t = getLocalToken()

  const response = await $axios.get(url, {
    "Accept": "*/*",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${t}`,
    "Content-Type": "application/json",
  })

  if (response.response.status === 401) {
    alert('Erro')
  }

  return response
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
