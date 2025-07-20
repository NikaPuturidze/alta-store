import { Link } from 'react-router'
import styled from 'styled-components'

export const Wrapper = styled.section``

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 30px;
  position: relative;
  border-radius: 10px;
  background-color: transparent;

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 640px) {
    border-radius: 6px;
    grid-template-columns: 1fr;
  }
`

export const ImageLinker = styled(Link)`
  width: 100%;
  max-height: 137px;
  img {
    max-height: 137px;
    border-radius: 10px;
    width: 100%;
    transition: 0.5s ease-in-out;

    &:hover {
      transform: scale(1.015);
    }
  }
`
