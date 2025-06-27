import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const PromotionSliderSection = styled.section`
  width: 1168px;
  aspect-ratio: 1168 / 364;
  margin: 0px auto 32px;
  background-color: var(--color-light-purple-2);
  border: 1px solid var(--color-light-gray-1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`

export const SwiperWrapper = styled(Swiper)`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;

  .swiper-wrapper {
    display: flex;

    img {
      height: 364px;
      width: 1168px;
    }
  }

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    z-index: 10;

    .swiper-pagination-bullet {
      display: inline-block;
      cursor: pointer;
      margin-inline: var(--swiper-pag-bullet-horizontal-gap);
      width: var(--swiper-pag-bullet-size);
      height: var(--swiper-pag-bullet-size);
      border-radius: var(--swiper-pag-bullet-border-radius);
      background: var(--swiper-pag-bullet-inactive-color);
    }

    .swiper-pagination-bullet-active {
      background: var(--swiper-pag-bullet-inactive-color);
      opacity: var(--swiper-pag-bullet-active-opacity);
      border: 4px solid var(--color-purple-1);
    }
  }
`
