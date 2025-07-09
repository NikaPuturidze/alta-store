import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import DoubleBanner from './components/DoubleSection'
import PromotionSlider from './components/PromotionSlider'
import MegaMenu from './components/MegaMenu'
import SingleSection from './components/SingleSection'
import GridFirstSection from './components/GridFirstSection'
import BrandsSection from './components/BrandsSection'
import GridSecondSection from './components/GridSecondSection'
import GeneralSlider from './components/GeneralSlider'
import { getBlog } from '../services/getBlog'
import Blog from './components/Blog'
import type { IGetBlog } from '../interfaces/getBlog.interface'
import type { IGetContent } from '../interfaces/getContent.interface'

const Main = () => {
  const { i18n } = useTranslation()
  const { response: contentResponse } = useFetch<IGetContent>(getContent, [i18n.language])
  const { response: blogResponse } = useFetch<IGetBlog>(getBlog, [i18n.language])

  return (
    <>
      <PromotionSlider sections={contentResponse?.section[1]} />
      <DoubleBanner sections={contentResponse?.section[2]} />
      <MegaMenu sections={contentResponse?.section[3]} />
      <GeneralSlider sections={contentResponse?.section[4]} />
      <SingleSection sections={contentResponse?.section[5]} />
      <GridFirstSection sections={contentResponse?.section[6]} />
      <BrandsSection sections={contentResponse?.section[7]} />
      <GeneralSlider sections={contentResponse?.section[8]} />
      <GridSecondSection sections={contentResponse?.section[9]} />
      <DoubleBanner sections={contentResponse?.section[10]} />
      <Blog blogPostsRes={blogResponse as IGetBlog | undefined} />
    </>
  )
}

export default Main
