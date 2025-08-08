import { useTranslation } from 'react-i18next'
import { useFetch } from '../../../hooks/useFetch'
import { getContent } from '../services/getContent'
import GeneralSlider from './components/GeneralSlider'
import { getBlog } from '../services/getBlog'
import type { IGetBlog } from '../interfaces/getBlog.interface'
import type { IGetContent, Section } from '../interfaces/getContent.interface'
import BrandsSection from './components/BrandsSection'
import MegaMenu from './components/MegaMenu'
import PromotionSlider from './components/PromotionSlider'
import DoubleBanner from './components/DoubleSection'
import SingleSection from './components/SingleSection'
import GridFirstSection from './components/GridFirstSection'
import GridSecondSection from './components/GridSecondSection'
import Blog from './components/Blog'

const Main = () => {
  const { i18n } = useTranslation()
  const { data: contentResponse } = useFetch<IGetContent>({
    fetchData: getContent,
    key: ['content', i18n.language],
  })
  const { data: blogResponse } = useFetch<IGetBlog>({
    fetchData: getBlog,
    key: ['blog', i18n.language],
  })

  const determineSection = (section: Section, i: number) => {
    switch (section?.sectionType) {
      case 2:
        return <MegaMenu key={i} sections={contentResponse?.section[i]} />
      case 3:
        return determineBannerType(section?.bannerSectionType, i)
      case 4:
        return <BrandsSection key={i} sections={contentResponse?.section[i]} />
      case 1:
      case 5:
        return <GeneralSlider key={i} sections={contentResponse?.section[i]} />
      default:
        break
    }
  }

  const determineBannerType = (bannerSectionType: number | null | undefined, i: number) => {
    switch (bannerSectionType) {
      case null:
        return <PromotionSlider key={i} sections={contentResponse?.section[i]} />
      case 2:
      case 3:
        return <DoubleBanner key={i} sections={contentResponse?.section[i]} />
      case 6:
        return <SingleSection key={i} sections={contentResponse?.section[i]} />
      case 7:
        return <GridSecondSection key={i} sections={contentResponse?.section[i]} />
      case 8:
        return <GridFirstSection key={i} sections={contentResponse?.section[i]} />
      default:
        break
    }
  }

  return (
    <>
      {contentResponse?.section.map((section, i) => determineSection(section, i))}
      <Blog blogPostsRes={blogResponse} />
    </>
  )
}

export default Main
