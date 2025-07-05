import { Link } from 'react-router'
import styled from 'styled-components'

export const CardWrapper = styled.div`
  position: relative;
  width: 216px;
  min-width: 216px;
  border-radius: 20px;
  border: 1px solid var(--color-light-gray-1);
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 158px;
    min-width: 158px;
  }
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 12px;

  @media (max-width: 1024px) {
    padding: 9px;
  }
`

export const Badge = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 12px;
  top: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 28px;
    height: 28px;
    right: 9px;
    top: 9px;
  }

  img {
    @media (max-width: 1024px) {
      width: 28px;
      height: 28px;
    }
  }
`

export const ImageWrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 138px;
    height: 138px;
  }
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0;
  color: transparent;
  object-fit: contain;
`

export const Info = styled.div`
  width: 100%;
  margin-top: 12px;

  @media (max-width: 1024px) {
    margin-top: 9px;
  }
`

export const Linker = styled(Link)`
  height: 40px;
`

export const Name = styled.h3`
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 15px;
    height: 30px;
  }
`

export const PriceWrapper = styled.div`
  margin: 4px 0px 18px;
  display: flex;
  align-items: center;
  gap: 7px;

  @media (max-width: 1024px) {
    margin: 14px 0px 12px;
    gap: 5px;
  }
`

export const SalePrice = styled.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;

  @media (max-width: 1024px) {
    line-height: 15px;
    font-size: 15px;
  }
`

export const Currency = styled.span`
  font-size: 80%;
`

export const InitialPrice = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: var(--color-gray-3);
  font-weight: 400;
  position: relative;

  @media (max-width: 1024px) {
    line-height: 11px;
    font-size: 11px;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 1px;
    width: 100%;
    height: 100%;
    transform: rotate(2deg);
    background-image: url(https://alta.ge/icons/line-through-red.svg);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`

export const CartButtonWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: auto;
`

export const CartButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }
`

export const CartButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
`

export const BuyButtonWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: 100%;
`

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: var(--color-purple-1);
  color: var(--color-white);
  border-radius: 36px;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(42, 16, 62, 0.15) 2px 4px 5px 0px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 30px;
    font-size: 12px;
    line-height: 12px;
  }
`
