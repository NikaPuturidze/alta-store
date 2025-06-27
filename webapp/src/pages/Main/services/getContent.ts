import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'
import type { IGetContent } from '../interfaces/getContent.interface'

export const getContent = (): AxiosPromise<IGetContent> => {
  return axiosInstance.get<IGetContent>('v1/Content/get-content-v2')
}
