import { Link } from 'react-router'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  .p-1 {
    grid-area: 1 / 1 / 3 / 2;
  }
  .p-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .p-3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .p-4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .p-5 {
    grid-area: 2 / 3 / 3 / 4;
  }

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .p-1 {
      grid-area: 1 / 1 / 3 / 2;
    }
    .p-2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .p-3 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .p-4 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .p-5 {
      grid-area: 3 / 2 / 4 / 3;
    }
  }
`

export const ProductWrapper = styled(Link)``

export const Product = styled.img`
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  border-radius: 12px;
`
