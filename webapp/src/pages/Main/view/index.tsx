import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import PromotionSlider from './components/PromotionSlider'

const Main = () => {
  const { i18n } = useTranslation()
  const { response } = useFetch(getContent, [i18n.language])

  return <PromotionSlider sections={response?.section[1]} />
}

export default Main
