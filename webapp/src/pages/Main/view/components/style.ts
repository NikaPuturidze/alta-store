import styled from 'styled-components'

export const Marginator = styled.section`
  position: relative;
  margin-bottom: 56px;

  @media (max-width: 1024px) {
    margin-bottom: 28px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;

  @media (max-width: 1024px) {
    padding-bottom: 16px;
    border-bottom: none;
  }
`

export const Title = styled.h2`
  position: relative;
  font-size: 20px;
  line-height: 20px;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`
