import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  margin-bottom: 22px;
`

export const TopHeader = styled.div`
  padding-block: 17px;
  background-color: var(--color-light-purple-1);

  @media (max-width: 1024px) {
    grid-template-columns: 32px 1fr 64px;
    padding-block: 9px;
  }
`

export const TopHeaderContent = styled.div`
  max-height: 40px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  grid-template-columns: 220px 150px minmax(300px, 374px) 288px;

  @media (max-width: 1024px) {
    grid-template-columns: 32px 1fr 72px;
    column-gap: 6px;
  }
`

export const BurgerWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    display: flex;
  }
`

export const Burger = styled.svg`
  width: 20px;
  height: 20px;
`

export const Logo = styled.img`
  width: 220px;
  height: 40px;

  @media (max-width: 1024px) {
    margin-inline: auto;
    width: 100%;
    width: 158px;
    height: 27px;
  }
`

export const CategoriesWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const CategoriesButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CategoriesIcon = styled.svg`
  width: 20px;
  height: 20px;
`

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-right: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  padding-inline: 13px 40px;
  width: 100%;
  height: 100%;
  border-radius: 150px;
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: var(--color-black-3);

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
  }
`

export const SearchIcon = styled.svg`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
`

export const UtilsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 8px;
  }
`

export const CircleWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const CircleImage = styled.img`
  height: 40px;
  width: 40px;
`

export const SignInWrapper = styled.div`
  min-width: 120px;
  width: 120px;
  height: 40px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const SignInButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8px 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 16px;
`

export const SignInIcon = styled.svg`
  width: 36px;
  height: 36px;
`

export const SignInText = styled.span`
  line-height: 16px;
`

export const LanguageWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 32px;
    height: 32px;
  }
`

export const Language = styled.div`
  position: relative;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchSm = styled.div`
  display: none !important;
  width: 100%;
  height: 40px;
  border-radius: 88px;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 32px;
    height: 32px;
    display: flex !important;
  }
`

export const SearchIconSm = styled.svg`
  width: 20px;
  height: 20px;
`
