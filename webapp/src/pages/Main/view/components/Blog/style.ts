import { Link } from 'react-router'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SmallTitle = styled(Link)`
  display: block;
  color: var(--color-black);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`

export const Content = styled.div``

export const SwiperWrapper = styled(Swiper)`
  position: relative;
  overflow: hidden;
  display: block;

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
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

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 275px;
  min-width: 275px;
  height: 178px;
  border-radius: 18px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  margin-right: 22px;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
    transition: 250ms;
  }
`

export const SwiperSlideWrapper = styled(SwiperSlide)`
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    min-width: 156px;
    width: 156px !important;
    margin-right: 12px;
  }
`

export const BlogTItle = styled.h3`
  color: var(--color-black-2);
  max-width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
`
