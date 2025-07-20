import { Link } from 'react-router'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  margin-bottom: 28px;
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

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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

  &::after {
    position: absolute;
    content: '';
    top: 40px;
    left: 0px;
    height: 17px;
    width: 240px;
    background-color: transparent;
  }
`

export const MotionCategoriesWrapper = styled.div`
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

  &::after {
    position: absolute;
    content: '';
    top: 40px;
    left: 0px;
    height: 17px;
    width: 240px;
    background-color: transparent;
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

export const CategoriesContentWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 57px;
  left: 0px;
  max-height: calc(-75px + 100vh);
  z-index: 2;
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 8.5px 0px;
  transition: 0.5s ease-in-out;
  overflow: hidden;
`

export const ContentOpen = {
  height: 100,
}

export const CategoriesContent = styled.div`
  position: relative;
  top: 0px;
  width: 240px;
  z-index: 3;
`

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top-left-radius: 12px;
  max-height: 100%;
  opacity: 1;
  height: auto;
`

export const ListElement = styled.li`
  border-bottom: 1px solid var(--color-light-gray-1);
  cursor: pointer;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 12px 16px;

  &:hover {
    background-color: var(--color-light-purple-3);
  }
`

export const ListLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const ElementIconWrapper = styled.div`
  width: 33px;
  height: 35px;
  position: relative;
  object-fit: contain;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
  }
`

export const ElementName = styled.span`
  font-weight: 400;
  text-align: right;
  max-width: 60%;
`

export const CategoriesListElement = styled.li`
  border-bottom: 1px solid var(--color-light-gray-1);
  cursor: pointer;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
`

export const ElementContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  gap: 18px 32px;
  border-radius: 0px 12px 12px 0px;
  max-height: calc(-75px + 100vh);
  padding: 32px 20px;
  background-color: var(--color-white);
  overflow-y: auto;
`

export const ParentCategoryItem = styled.div`
  width: calc(33.3333% - 21.3333px);
  height: fit-content;
`

export const ParentCategoryLink = styled(Link)`
  line-height: 16px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    color: var(--color-purple-1);
  }
`

export const SubCategories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SubCategoryItem = styled.li`
  line-height: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:first-child {
    margin-top: 12px;
  }
`

export const SubCategoryLink = styled(Link)`
  &:hover {
    transform: scale(1.01);
    color: var(--color-purple-1);
  }
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
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;

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
  width: 40px;
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

export const BottomHeader = styled.div`
  padding-block: 18px;
  border-bottom: 1px solid var(--color-light-gray-1);
  border-top: 1px solid var(--color-light-gray-1);
  margin-top: 0px;
`

export const BottomHeaderWrapepr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const Utils = styled.nav`
  display: flex;
  gap: 24px;
`

export const UtilsContent = styled.div`
  display: flex;
  align-items: center;
`

export const PhoneIcon = styled.svg`
  width: 10px;
  height: 10px;
  fill: none;
`

export const PhoneNumberWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-left: 6px;
`

export const NumberSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  outline-style: none;
  outline-color: none;
`

export const LinkTo = styled(Link)`
  color: var(--color-black-4) !important;
`
