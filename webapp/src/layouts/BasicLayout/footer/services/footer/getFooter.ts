import { axiosInstance } from '../../../../../utils/api/api'
import type { IGetFooter } from './getFooter.interface'

export const getFooter = async (): Promise<IGetFooter> => {
  return (await axiosInstance.get<IGetFooter>('/v1/Topics/get-topics')).data
}
