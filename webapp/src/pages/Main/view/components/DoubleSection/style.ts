import { Link } from 'react-router'
import styled from 'styled-components'

export const Wrapper = styled.section``

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  border-radius: 10px;
  background-color: transparent;
`

export const ImageLinker = styled(Link)`
  width: fit-content;
  height: fit-content;
  display: contents;
  overflow: hidden;

  img {
    border-radius: 10px;
  }
`
