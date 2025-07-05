import { useIsDesktop } from '../../../../../hooks/useIsDesktop'
import type { SectionProps } from '../../../types'
import { Marginator } from '../style'
import { Wrapper, ImageLinker, Content } from './style'

const DoubleBanner = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Wrapper>
      <Marginator>
        <Content>
          {sections
            ? sections.banners?.map((banner, i) => (
                <ImageLinker to={banner.route} key={i}>
                  <img src={isDesktop ? banner.webImageUrl : banner.mobileImageUrl} />
                </ImageLinker>
              ))
            : null}
        </Content>
      </Marginator>
    </Wrapper>
  )
}

export default DoubleBanner
