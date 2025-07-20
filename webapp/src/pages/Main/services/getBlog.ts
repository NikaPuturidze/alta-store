import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'

export const getBlog = (): AxiosPromise => {
  return axiosInstance.get('/v1/Topics/get-blogposts?PageSize=10&Page=1')
}
