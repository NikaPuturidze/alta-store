import { Link } from 'react-router'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const PromotionSliderSection = styled.section`
  width: 1168px;
  aspect-ratio: 1168 / 364;
  margin: 0px auto 32px;
  background-color: var(--color-light-purple-2);
  border: 1px solid var(--color-light-gray-1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  .swiper {
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: calc(100% + 20px);
    aspect-ratio: auto;
    margin-top: 0px;
    margin-bottom: 12px;
    background-color: unset;
    border: unset;
    border-radius: unset;
  }
`

export const StyledSwiperSlide = styled(SwiperSlide)`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;

  @media (max-width: 1024px) {
    margin-right: 12px;
    flex-shrink: 0;
    position: relative;
    transition-property: transform;
    display: block;
    width: 290px !important;
    height: 118px !important;
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: fill;
  }

  @media (max-width: 1024px) {
    width: 100% !important;
    height: 100% !important;
  }
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
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: initial;
    box-sizing: content-box;
  }

  .swiper-pagination {
    position: absolute;
    bottom: var(--swiper-pag-bottom);
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
      background: #fff;
      opacity: var(--swiper-pag-bullet-active-opacity);
      border: 4px solid var(--color-purple-1);
    }
  }
`
