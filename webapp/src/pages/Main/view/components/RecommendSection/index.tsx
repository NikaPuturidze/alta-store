import { useTranslation } from 'react-i18next'
import type { SectionProps } from '../../../types'
import { Content, Wrapper, SwiperSlideWrapper, SwiperWrapper } from './style'
import ProductCard from '../../../../../components/ProductCard/ProductCard'
import { Navigation } from 'swiper/modules'
import { Marginator, Title, TitleWrapper } from '../style'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'

const RecommendSection = ({ sections }: SectionProps) => {
  const { t } = useTranslation()
  const isDesktop = useIsDesktop()

  return (
    <Wrapper>
      <Marginator>
        <TitleWrapper>
          <Title>{t('altaReccomends')}</Title>
        </TitleWrapper>
        <Content>
          {sections?.products ? (
            <SwiperWrapper
              enabled={isDesktop}
              slidesPerView={'auto'}
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
        </Content>
      </Marginator>
    </Wrapper>
  )
}

export default RecommendSection
