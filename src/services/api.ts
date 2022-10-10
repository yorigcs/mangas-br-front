import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/no-unused-expressions

const api = axios.create({
  baseURL: import.meta.env.VITE_API_LINK
})

export default api
