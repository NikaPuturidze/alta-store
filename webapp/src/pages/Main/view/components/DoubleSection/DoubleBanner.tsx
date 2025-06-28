import type { SectionProps } from '../../../types'
import { DoubleBannerSection, DoubleBannerSectionWrapper, ImageLinker } from './style'

const DoubleBanner = ({ sections }: SectionProps) => {
  return (
    <DoubleBannerSectionWrapper>
      <DoubleBannerSection>
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
      </DoubleBannerSection>
    </DoubleBannerSectionWrapper>
  )
}

export default DoubleBanner
