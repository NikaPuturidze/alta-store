import { Link } from 'react-router'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;

  .p-1 {
    grid-area: 1 / 1 / 6 / 3;
  }
  .p-2 {
    grid-area: 1 / 3 / 3 / 5;
  }
  .p-3 {
    grid-area: 3 / 3 / 6 / 4;
  }
  .p-4 {
    grid-area: 3 / 4 / 6 / 5;
  }
  .p-5 {
    grid-area: 1 / 5 / 6 / 7;
  }

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: -27%;

    .p-1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .p-2 {
      grid-area: 3 / 1 / 4 / 3;
      height: fit-content;
      img {
        object-fit: cover;
      }
    }
    .p-3 {
      grid-area: 2 / 1 / 3 / 2;
    }

    .p-4 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .p-5 {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`

export const ProductWrapper = styled(Link)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const Product = styled.img`
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  border-radius: 12px;
`
