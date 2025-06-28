import { SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { PromotionSliderSection, SwiperWrapper } from './style'
import type { SectionProps } from '../../../types'

const PromotionSlider = ({ sections }: SectionProps) => {
  return (
    <PromotionSliderSection>
      <SwiperWrapper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {sections
          ? sections.banners?.map((banner, i) => (
              <SwiperSlide key={i}>
                <img src={banner.webImageUrl} />
              </SwiperSlide>
            ))
          : null}
      </SwiperWrapper>
    </PromotionSliderSection>
  )
}

export default PromotionSlider
