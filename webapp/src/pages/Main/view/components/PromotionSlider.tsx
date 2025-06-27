import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Section } from '../../interfaces/getContent.interface'
import { PromotionSliderSection, SwiperWrapper } from './style'

type Props = {
  sections: Section | undefined
}

const PromotionSlider = ({ sections }: Props) => {
  return (
    <PromotionSliderSection>
      <SwiperWrapper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }}>
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
