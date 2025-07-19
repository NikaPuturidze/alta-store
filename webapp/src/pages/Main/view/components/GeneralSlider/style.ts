import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Wrapper = styled.section`
  min-height: 388px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 267px;
  }
`

export const Content = styled.div``

export const SwiperWrapper = styled(Swiper)`
  position: relative;
  display: block;
`

export const SwiperSlideWrapper = styled(SwiperSlide)`
  min-width: 215px;
  width: 215px !important;
  margin-right: 23px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    min-width: 156px;
    width: 156px !important;
    margin-right: 12px;
  }
`
