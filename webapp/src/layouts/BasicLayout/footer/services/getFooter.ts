import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../../utils/axiosInstance'
import type { IGetFooter } from '../interfaces/getFooter.interface'

export const getFooter = (): AxiosPromise<IGetFooter> => {
  return axiosInstance.get<IGetFooter>('/v1/Topics/get-topics')
}
