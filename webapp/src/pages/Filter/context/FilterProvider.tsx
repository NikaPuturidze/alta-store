/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react'
import { useTranslation } from 'react-i18next'
import { getFilter } from '../services/getFIlter'
import { useFetch } from '../../../hooks/useFetch'
import type { IGetFilter } from '../interfaces/get-filter.interface'
import { getProducts } from '../services/getProducts'
import type { IGetProducts } from '../interfaces/get-products.interface'
import { useDebounce } from 'use-debounce'
import { useSearchParams } from 'react-router'

type FilterContextT = {
  filter: IGetFilter | undefined
  products: IGetProducts | undefined
  loading: boolean
  error: Error | null
  price: number[] | null
  catId: number | null
  setPrice: Dispatch<SetStateAction<number[] | null>>
  setCatId: Dispatch<SetStateAction<number | null>>
  refetchProducts: () => void
  refetchFilter: () => void
}

export const FilterContext = createContext<FilterContextT | null>(null)

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [catId, setCatId] = useState<number | null>(null)
  const [price, setPrice] = useState<number[] | null>(null)
  const [debouncedPrice] = useDebounce(price, 300)
  const [searchParams, setSearchParams] = useSearchParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    if (minPrice && maxPrice && !price) {
      setPrice([Number(minPrice), Number(maxPrice)])
    }
  }, [price, searchParams])

  useEffect(() => {
    if (!debouncedPrice) return
    setSearchParams(
      {
        minPrice: debouncedPrice[0].toString(),
        maxPrice: debouncedPrice[1].toString(),
      },
      { replace: true }
    )
  }, [debouncedPrice, setSearchParams])

  const {
    data: filter,
    isLoading: filterLoading,
    error: filterError,
    refetch: refetchFilter,
  } = useFetch<IGetFilter>({
    fetchData: () => getFilter(catId)!,
    key: [i18n.language, catId],
    enabled: !!catId,
  })

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useFetch<IGetProducts>({
    fetchData: () => {
      return getProducts({
        catId: catId,
        page: 1,
        limit: 28,
        minPrice: price?.[0],
        maxPrice: price?.[1],
      })
    },
    key: ['products', i18n.language, debouncedPrice],
    enabled: !!catId && !!debouncedPrice,
  })

  const loading = filterLoading || productsLoading
  const error = filterError ?? productsError ?? null

  const value = {
    price,
    catId,
    setPrice,
    setCatId,
    filter,
    products,
    loading,
    error,
    refetchProducts,
    refetchFilter,
  }

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}

export const useFilterProvider = () => {
  const context = useContext(FilterContext)

  if (!context) throw new Error('useFilterProvider must be used within FilterProvider')

  return context
}
