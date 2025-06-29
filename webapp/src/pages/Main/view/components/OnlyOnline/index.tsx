import { useTranslation } from 'react-i18next'
import type { SectionProps } from '../../../types'
import { Content, Title, TitleWrapper, Wrapper, SwiperSlideWrapper, SwiperWrapper } from './style'
import ProductCard from '../../../../../components/ProductCard/ProductCard'
import { Navigation } from 'swiper/modules'
import { Marginator } from '../style'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'

const OnlyOnline = ({ sections }: SectionProps) => {
  const { t } = useTranslation()
  const isDesktop = useIsDesktop()

  return (
    <Wrapper>
      <Marginator>
        <TitleWrapper>
          <Title>{t('onlyOnline')}</Title>
        </TitleWrapper>
        <Content>
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
        </Content>
      </Marginator>
    </Wrapper>
  )
}

export default OnlyOnline
