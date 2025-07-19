import styled from 'styled-components'

export const Marginator = styled.div`
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
    margin-bottom: 16px;
    border-bottom: none;
  }
`

export const Title = styled.h2`
  position: relative;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 14px;
  }
`

export const TitleLight = styled.h2`
  position: relative;
  font-size: 20px;
  line-height: 20px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`
