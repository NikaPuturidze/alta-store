import axios from 'axios'

const url = `http://localhost:3000/`

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const lang = localStorage.getItem('i18nextLng')
  if (lang) config.headers['accept-language'] = lang
  return config
})
