import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Wrapper = styled.section`
  min-height: 388px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 267px;
  }
`

export const ContentWrapper = styled.div``

export const Content = styled.div``

export const SwiperWrapper = styled(Swiper)`
  position: relative;

  .swiper-wrapper {
    display: flex;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: var(--swiper-navigation-color);
    border-radius: 50%;
    width: 45px !important;
    height: 45px !important;
    box-shadow: 0 1.8px 9px 0 #00000033;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: var(--swiper-navigation-top-offset);
    right: var(--swiper-navigation-side-offset);

    &::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-image: url(https://alta.ge/icons/arrow-right.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: var(--swiper-navigation-side-offset);
    &::after {
      background-image: url(https://alta.ge/icons/arrow-left.svg);
    }
  }

  .swiper-button-disabled {
    display: none !important;
    pointer-events: none !important;
  }
`

export const SwiperSlideWrapper = styled(SwiperSlide)`
  max-width: fit-content;
  min-width: 216px;
  width: 216px !important;
  margin-right: 22px;

  @media (max-width: 1024px) {
    max-width: fit-content;
    min-width: 156px;
    width: 156px !important;
    margin-right: 12px;
  }
`
