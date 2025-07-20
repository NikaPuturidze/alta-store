import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../../utils/axiosInstance'

export const getCategories = (): AxiosPromise => {
  return axiosInstance.get('/v1/Content/mega-menu')
}
