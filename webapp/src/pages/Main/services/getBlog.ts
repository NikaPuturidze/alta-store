import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'

export const getBlog = <T>(): AxiosPromise<T> => {
  return axiosInstance.get<T>('/v1/Topics/get-blogposts?PageSize=10&Page=1')
}
