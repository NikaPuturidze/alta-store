import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import DoubleBanner from './components/DoubleSection'
import PromotionSlider from './components/PromotionSlider'
import MegaMenu from './components/MegaMenu'
import OnlyOnline from './components/OnlyOnline'
import SingleSection from './components/SingleSection'
import GridFirstSection from './components/GridFirstSection'

const Main = () => {
  const { i18n } = useTranslation()
  const { response } = useFetch(getContent, [i18n.language])

  return (
    <>
      <PromotionSlider sections={response?.section[1]} />
      <DoubleBanner sections={response?.section[2]} />
      <MegaMenu sections={response?.section[3]} />
      <OnlyOnline sections={response?.section[4]} />
      <SingleSection sections={response?.section[5]} />
      <GridFirstSection sections={response?.section[6]} />
    </>
  )
}

export default Main
