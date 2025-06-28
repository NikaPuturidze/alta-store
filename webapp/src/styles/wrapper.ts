import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-inline: 16px;
  margin-inline: auto;
  max-width: 1200px;
  width: calc(100vw - 16px);

  @media (max-width: 1024px) {
    padding-inline: 20px;
    width: calc(100vw - 20px);
  }
`
