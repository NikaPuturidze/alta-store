import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'
import type { IGetTopic } from '../interfaces/getTopics.interface'

export const getTopic = (title: string | undefined): AxiosPromise<IGetTopic> => {
  console.log('123', title)
  return axiosInstance.get(`/v1/Topics/get-topic?title=${title}`)
}
