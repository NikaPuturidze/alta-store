import { Link } from 'react-router'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Content = styled.div`
  overflow: hidden;
`

export const SwiperWrapper = styled(Swiper)`
  position: relative;
`

export const Wrapper = styled(SwiperSlide)`
  width: 79px !important;
  min-width: 79px;
  margin-right: 20px;
  max-width: fit-content;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    margin-right: 12px;
    width: 62px !important;
    min-width: 62px;
    max-width: fit-content;
    height: 62px;
  }
`

export const Linker = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 62px;
    height: 62px;
  }
`

export const Frame = styled.div`
  position: absolute;
  width: 78px;
  height: 78px;
  z-index: 1;
  background-image: url(https://alta.ge/icons/brand-frame.svg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;

  @media (max-width: 1024px) {
    width: 62px;
    height: 62px;
  }
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  position: relative;
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
`
