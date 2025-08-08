import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'
import type { IGetFilter } from '../interfaces/get-filter.interface'

export const getFilter = (catId: number | null): AxiosPromise<IGetFilter> | undefined => {
  return axiosInstance.get(`/v1/Content/filter?catId=${catId}`)
}
