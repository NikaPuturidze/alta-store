import { Link } from 'react-router'
import styled from 'styled-components'

export const Wrapper = styled.section``

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(10, 1fr);
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    overflow-x: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Category = styled(Link)`
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 20px;
  height: 110px;
  border-radius: 17px;
  transition: transform 0.2s ease-in-out;
  background-color: var(--color-light-purple-2);
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;

  @media (max-width: 1024px) {
    height: 82px;
    width: 158px;
    padding: 15px;
    border-radius: 12px;
  }
`

export const CategoryImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  color: transparent;
  object-fit: contain;
  max-width: 40%;
  max-height: 80%;
  top: unset !important;
  left: unset !important;
  right: 0px !important;
  bottom: 0px !important;
`

export const CategoryText = styled.h3`
  line-height: 17px;
  font-weight: 400;
  color: var(--color-black);
  text-transform: capitalize;
  position: relative;
  z-index: 1;
  max-width: 60%;
`
