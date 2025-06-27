/* eslint-disable react-hooks/exhaustive-deps */
import type { AxiosPromise } from 'axios'
import { useEffect, useState, useCallback } from 'react'

export function useFetch<T>(fetchData: () => AxiosPromise<T>, dep: unknown[] = []) {
  const [response, setResponse] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAPI = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchData()
      setResponse(result.data)
    } catch (error: unknown) {
      setError(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }, [fetchData])

  useEffect(() => {
    fetchAPI()
  }, [fetchAPI, ...dep])

  return {
    response,
    loading,
    error,
    refetch: fetchAPI,
  }
}
