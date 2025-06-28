import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import DoubleBanner from './components/DoubleSection/DoubleBanner'
import PromotionSlider from './components/PromotionSlider/PromotionSlider'

const Main = () => {
  const { i18n } = useTranslation()
  const { response } = useFetch(getContent, [i18n.language])

  return (
    <>
      <PromotionSlider sections={response?.section[1]} />
      <DoubleBanner sections={response?.section[2]} />
    </>
  )
}

export default Main
