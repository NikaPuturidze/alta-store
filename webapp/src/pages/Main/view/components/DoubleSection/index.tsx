import type { SectionProps } from '../../../types'
import { Marginator } from '../style'
import { Wrapper, ImageLinker, Content } from './style'

const DoubleBanner = ({ sections }: SectionProps) => {
  return (
    <Wrapper>
      <Marginator>
        <Content>
          {sections
            ? sections.banners?.map((banner, i) => (
                <ImageLinker to={banner.route} key={i}>
                  <img
                    src={banner.webImageUrl}
                    width={banner.webDimensions?.widthInPixels}
                    height={banner.webDimensions?.heightInPixels}
                  />
                </ImageLinker>
              ))
            : null}
        </Content>
      </Marginator>
    </Wrapper>
  )
}

export default DoubleBanner
