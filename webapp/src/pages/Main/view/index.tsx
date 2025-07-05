import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import DoubleBanner from './components/DoubleSection'
import PromotionSlider from './components/PromotionSlider'
import MegaMenu from './components/MegaMenu'
import OnlyOnline from './components/OnlyOnline'
import SingleSection from './components/SingleSection'
import GridFirstSection from './components/GridFirstSection'
import BrandsSection from './components/BrandsSection'
import GridSecondSection from './components/GridSecondSection'
import RecommendSection from './components/RecommendSection'

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
      <BrandsSection sections={response?.section[7]} />
      <RecommendSection sections={response?.section[8]} />
      <GridSecondSection sections={response?.section[9]} />
    </>
  )
}

export default Main
