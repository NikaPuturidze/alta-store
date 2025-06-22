import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: relative;
  padding-block: 20px 0px;
  border-top: 1px solid var(--color-light-gray-1);
  background-color: var(--color-light-purple-1);
  z-index: 1;

  @media (max-width: 1024px) {
    padding-block: 4px 0px;
  }
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  width: calc(100% - 180px);

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }
`

export const ContentBox = styled.div`
  min-height: 190px;

  @media (max-width: 1024px) {
    width: 45%;
    gap: 5px;
  }
`

export const ContentTitle = styled.p`
  margin-bottom: 30px;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  color: var(--color-purple-1);

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 10px;
    width: 120px;
    height: 2px;
    background-image: url(https://alta.ge/icons/footer-name-border.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const ContentList = styled.ul``

export const ListElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;
  font-size: 12px;
  line-height: 20px;
  color: var(--color-black-06);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`

export const Ecommerce = styled.svg`
  position: absolute;
  width: 135px;
  height: 26px;
  fill: none;
  bottom: 20px;
  right: 10px;

  @media (max-width: 1024px) {
    position: static;
  }
`

export const Link = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const CopyrightWrapper = styled.div`
  padding: 20px 0px;
  border-top: 2px solid var(--color-white);

  @media (max-width: 1024px) {
    border: none;
  }
`

export const Copyright = styled.div`
  text-align: left;
  text-transform: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  color: var(--color-black-3-06);

  @media (max-width: 1024px) {
    max-width: 135px;
    font-size: 10px;
    line-height: 15px;
  }
`
