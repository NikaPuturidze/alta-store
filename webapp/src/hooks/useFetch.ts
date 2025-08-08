import { useQuery } from '@tanstack/react-query'
import type { AxiosPromise } from 'axios'

type Arguments<T> = {
  fetchData: () => AxiosPromise<T>
  key: unknown[]
  enabled?: boolean
}

export const useFetch = <T>({ fetchData, key, enabled = true }: Arguments<T>) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await fetchData()
      return data
    },
    enabled,
  })
}
