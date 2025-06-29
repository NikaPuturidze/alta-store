import { useIsDesktop } from '../../../../../hooks/useIsDesktop'
import type { SectionProps } from '../../../types'
import { Marginator, Title, TitleWrapper } from '../style'
import { Content, Product, ProductWrapper, Wrapper } from './style'

const GridFirstSection = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Marginator>
      <Wrapper>
        <TitleWrapper>
          <Title>{sections?.title}</Title>
        </TitleWrapper>
        <Content>
          {sections && sections.banners
            ? sections.banners.map((banner, i) => (
                <ProductWrapper to={banner.route} key={i} className={`p-${i + 1}`}>
                  <Product src={isDesktop ? banner.webImageUrl : banner.mobileImageUrl}></Product>
                </ProductWrapper>
              ))
            : null}
        </Content>
      </Wrapper>
    </Marginator>
  )
}

export default GridFirstSection
