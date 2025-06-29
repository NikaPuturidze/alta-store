import { Link } from 'react-router'
import styled from 'styled-components'

export const Content = styled(Link)`
  display: block;
  width: 100%;
  height: 188px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
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
`
