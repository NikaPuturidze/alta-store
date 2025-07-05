import type { SectionProps } from '../../../types'
import { Content, Wrapper, SwiperSlideWrapper, SwiperWrapper } from './style'
import ProductCard from '../../../../../components/ProductCard/ProductCard'
import { Navigation } from 'swiper/modules'
import { Marginator, Title, TitleWrapper } from '../style'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'

const OnlyOnline = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Wrapper>
      <Marginator>
        <TitleWrapper>
          <Title>{sections?.title?.split('-')[0]}</Title>
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

export default OnlyOnline
