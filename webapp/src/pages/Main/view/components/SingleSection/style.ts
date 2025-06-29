import { Link } from 'react-router'
import styled from 'styled-components'

export const Content = styled(Link)`
  display: block;
  width: 100%;
  height: 188px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    aspect-ratio: 334 / 80;
  }
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  cursor: pointer;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  border-radius: 10px;

  @media (max-width: 1024px) {
    object-fit: contain;
  }
`
