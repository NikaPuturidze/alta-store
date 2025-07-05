import { Navigation } from 'swiper/modules'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'
import type { SectionProps } from '../../../types'
import { Marginator, Title, TitleWrapper } from '../style'
import { Brand, Content, Frame, Linker, SwiperWrapper, Wrapper, Image } from './style'

const BrandsSection = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Marginator>
      <TitleWrapper>
        <Title>{sections?.title?.split('-')[0]}</Title>
      </TitleWrapper>
      <Content>
        <SwiperWrapper
          enabled={isDesktop}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation={isDesktop}
          loop={false}
        >
          {sections?.brands &&
            sections.brands.map((brand, i) => (
              <Wrapper key={i}>
                <Linker to={brand.route}>
                  <Frame />
                  <Brand>
                    <Image src={brand.imageUrl}></Image>
                  </Brand>
                </Linker>
              </Wrapper>
            ))}
        </SwiperWrapper>
      </Content>
    </Marginator>
  )
}

export default BrandsSection
