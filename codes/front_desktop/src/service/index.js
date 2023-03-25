import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8000/api",
})

export async function getData(route) {
  const baseURL = `http://localhost:8000/api/${route}`
  const response = await axios.get(baseURL)
  return response.data
}

export default api