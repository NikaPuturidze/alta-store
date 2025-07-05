import { Pagination, Autoplay } from 'swiper/modules'
import { PromotionSliderSection, StyledLink, StyledSwiperSlide, SwiperWrapper } from './style'
import type { SectionProps } from '../../../types'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'

const PromotionSlider = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()
  return (
    <PromotionSliderSection>
      <SwiperWrapper
        slidesPerView={'auto'}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4111000 }}
        pagination={{ clickable: true }}
      >
        {sections
          ? sections.banners?.map((banner, i) => (
              <StyledSwiperSlide key={i}>
                <StyledLink to={banner.route}>
                  <img src={isDesktop ? banner.webImageUrl : banner.mobileImageUrl} />
                </StyledLink>
              </StyledSwiperSlide>
            ))
          : null}
      </SwiperWrapper>
    </PromotionSliderSection>
  )
}

export default PromotionSlider
