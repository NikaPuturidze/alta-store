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
import { useFetch } from '../../../hooks/useFetch'
import { getTopic } from '../services/getTopics'
import type { IGetTopic } from '../interfaces/getTopics.interface'
import { useParams } from 'react-router'

type TopicContextT = {
  data: IGetTopic | undefined
  loading: boolean
  error: Error | null
  title: string | undefined
  setTitle: Dispatch<SetStateAction<string | undefined>>
  RefetchTopic: () => void
}

export const TopicContext = createContext<TopicContextT | null>(null)

export const TopicProvider = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState<string | undefined>(undefined)
  const { i18n } = useTranslation()
  const { title: titleParam } = useParams()
  useEffect(() => setTitle(titleParam), [titleParam, setTitle])

  const {
    data,
    isLoading: loading,
    error,
    refetch: RefetchTopic,
  } = useFetch<IGetTopic>({
    fetchData: () => getTopic(title),
    key: [i18n.language, title],
    enabled: !!title,
  })

  const value = {
    data,
    setTitle,
    title,
    error,
    loading,
    RefetchTopic,
  }

  return <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
}

export const useTopicProvider = () => {
  const context = useContext(TopicContext)

  if (!context) throw new Error('useTopicProvider must be used within TopicProvider')

  return context
}
