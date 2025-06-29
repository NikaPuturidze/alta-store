import { useTranslation } from 'react-i18next'
import type { SectionProps } from '../../../types'
import {
  OnlyOnlineContent,
  OnlyOnlineTitle,
  OnlyOnlineTitleWrapper,
  OnlyOnlineWrapper,
  SwiperSlideWrapper,
  SwiperWrapper,
} from './style'
import ProductCard from '../../../../../components/ProductCard/ProductCard'
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'

const OnlyOnline = ({ sections }: SectionProps) => {
  const { t } = useTranslation()
  const [isDesktop, SetIsDesktop] = useState(window.innerWidth > 1024)

  useEffect(() => {
    window.addEventListener('resize', () => SetIsDesktop(window.innerWidth > 1024))
  }, [])

  return (
    <OnlyOnlineWrapper>
      <OnlyOnlineTitleWrapper>
        <OnlyOnlineTitle>{t('onlyOnline')}</OnlyOnlineTitle>
      </OnlyOnlineTitleWrapper>
      <OnlyOnlineContent>
        {sections?.products ? (
          <SwiperWrapper
            enabled={isDesktop}
            slidesPerView={isDesktop ? 5 : 'auto'}
            spaceBetween={isDesktop ? 22 : 12}
            modules={[Navigation]}
            navigation={isDesktop}
            loop={false}
          >
            {sections?.products.map((product) => (
              <SwiperSlideWrapper>
                <ProductCard product={product}></ProductCard>
              </SwiperSlideWrapper>
            ))}
          </SwiperWrapper>
        ) : null}
      </OnlyOnlineContent>
    </OnlyOnlineWrapper>
  )
}

export default OnlyOnline
