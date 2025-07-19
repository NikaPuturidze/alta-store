import { Link } from 'react-router'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SmallTitle = styled(Link)`
  display: block;
  color: var(--color-black);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 20px;
  }
`

export const Content = styled.div``

export const SwiperWrapper = styled(Swiper)`
  position: relative;
  overflow: hidden;
  display: block;
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

  @media (max-width: 1024px) {
    min-width: 158px;
    width: 158px;
    height: auto;
    aspect-ratio: 11 / 8;
    border-radius: 10px;
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
    transition: 250ms;

    &:hover {
      scale: 1.02;
    }
  }
`

export const SwiperSlideWrapper = styled(SwiperSlide)`
  margin-right: 22px;
  min-width: 275.5px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    margin-right: 16px;
    min-width: unset;
  }
`

export const BlogTitle = styled.h3`
  color: var(--color-black-2);
  max-width: 275px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    font-size: 11px;
    line-height: 15px;
    margin-top: 6px;
  }
`
