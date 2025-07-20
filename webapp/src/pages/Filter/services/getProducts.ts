import type { AxiosPromise } from 'axios'
import { axiosInstance } from '../../../utils/axiosInstance'
import type { IGetProducts } from '../interfaces/get-products.interface'

type Filters = {
  catId: number | null
  page: number
  limit: number
  minPrice: number | null | undefined
  maxPrice: number | null | undefined
}

export const getProducts = ({
  catId,
  page,
  limit,
  minPrice,
  maxPrice,
}: Filters): AxiosPromise<IGetProducts> | undefined => {
  if (!catId) return
  if (!page) return

  return axiosInstance.get(`/v1/Products/v3`, {
    params: {
      CategoryId: catId,
      Page: page,
      Limit: limit,
      ...(minPrice ? { minPrice } : {}),
      ...(maxPrice ? { maxPrice } : {}),
    },
  })
}
