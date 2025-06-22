import { Wrapper } from '../../../styles/wrapper'
import {
  Burger,
  BurgerWrapper,
  CategoriesButton,
  CategoriesIcon,
  CategoriesWrapper,
  CircleImage,
  CircleWrapper,
  HeaderWrapper,
  Language,
  LanguageWrapper,
  Logo,
  SearchIcon,
  SearchIconSm,
  SearchInput,
  SearchSm,
  SearchWrapper,
  SignInButton,
  SignInIcon,
  SignInText,
  SignInWrapper,
  TopHeader,
  TopHeaderContent,
  UtilsWrapper,
} from './style'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <HeaderWrapper>
      <TopHeader>
        <Wrapper>
          <TopHeaderContent>
            <BurgerWrapper>
              <Burger xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="#151515" d="M2.5 10h15m-15-5h15m-15 10h15"></path>
              </Burger>
            </BurgerWrapper>
            <Logo src="https://alta.ge/images/logo.svg" alt="Alta" decoding="async" />
            <CategoriesWrapper>
              <CategoriesButton>
                <CategoriesIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="#151515" d="M2.5 10h15m-15-5h15m-15 10h15"></path>
                </CategoriesIcon>
                {t('categories')}
              </CategoriesButton>
            </CategoriesWrapper>
            <SearchWrapper>
              <SearchInput placeholder={t('searchPlaceholder')}></SearchInput>
              <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <defs>
                  <style>{'.search-purple_svg{fill:#fff}'}</style>
                </defs>
                <g id="search-purple_svg__Layer_1">
                  <circle cx="30" cy="30" r="30" style={{ fill: '#735ea8' }}></circle>
                  <path
                    d="M25.21 15.77c2.71 0 5.27 1.06 7.19 2.98 1.92 1.92 2.98 4.47 2.98 7.19s-1.06 5.27-2.98 7.19c-1.92 1.92-4.47 2.98-7.19 2.98s-5.27-1.06-7.19-2.98c-3.96-3.96-3.96-10.41 0-14.37 1.92-1.92 4.47-2.98 7.19-2.98m0-3.51c-3.5 0-7 1.33-9.67 4-5.34 5.34-5.34 14 0 19.33 2.67 2.67 6.17 4 9.67 4s7-1.33 9.67-4c5.34-5.34 5.34-14 0-19.33-2.67-2.67-6.17-4-9.67-4ZM43.5 46.71l-8.08-8.08s.87-.55 1.44-1.12c.67-.67 1.04-1.36 1.04-1.36l10.56 10.56a3.507 3.507 0 0 1-4.96 0Z"
                    className="search-purple_svg"
                  ></path>
                </g>
              </SearchIcon>
            </SearchWrapper>
            <UtilsWrapper>
              <CircleWrapper>
                <CircleImage src="https://alta.ge/icons/cart-header.svg" loading="lazy" alt="cart icon" />
              </CircleWrapper>
              <CircleWrapper>
                <CircleImage src="https://alta.ge/icons/wishlist-header.svg" loading="lazy" alt="wishlist icon" />
              </CircleWrapper>
              <SignInWrapper>
                <SignInButton>
                  <SignInIcon xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 56.69 56.69">
                    <g data-name="Layer_1">
                      <circle cx="28.35" cy="28.35" r="28.35" fill="#fff"></circle>
                      <path d="M28.35 12.94c-8.51 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4 15.4-6.89 15.4-15.4-6.89-15.4-15.4-15.4ZM16.26 28.35c0-6.67 5.42-12.09 12.09-12.09s12.09 5.42 12.09 12.09c0 2.42-.72 4.68-1.96 6.57-2.89-2.36-6.48-3.67-10.19-3.67s-7.23 1.3-10.11 3.62a12.018 12.018 0 0 1-1.92-6.52Zm12.09 12.08c-3.07 0-5.88-1.15-8.01-3.05 2.28-1.81 5.08-2.83 7.95-2.83s5.73 1.03 8.02 2.87c-2.13 1.87-4.91 3-7.96 3Z"></path>
                      <path d="M28.35 21.75c1.41 0 2.55 1.15 2.55 2.55s-1.15 2.55-2.55 2.55-2.55-1.15-2.55-2.55 1.15-2.55 2.55-2.55Zm0-2.95c-3.04 0-5.51 2.47-5.51 5.51s2.47 5.51 5.51 5.51 5.51-2.47 5.51-5.51-2.47-5.51-5.51-5.51Z"></path>
                    </g>
                  </SignInIcon>
                  <SignInText>{t('signIn')}</SignInText>
                </SignInButton>
              </SignInWrapper>
              <LanguageWrapper onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ka' : 'en')}>
                <Language>{t('currentLanguage')}</Language>
              </LanguageWrapper>
              <SearchSm>
                <SearchIconSm xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 56.69 56.69">
                  <g data-name="Layer_1">
                    <circle cx="28.35" cy="28.35" r="28.35" fill="#fff"></circle>
                    <path d="M23.82 14.9c2.57 0 4.98 1 6.79 2.81s2.81 4.23 2.81 6.79-1 4.98-2.81 6.79-4.23 2.81-6.79 2.81-4.98-1-6.79-2.81c-3.74-3.74-3.74-9.84 0-13.58a9.555 9.555 0 0 1 6.79-2.81m0-3.31c-3.31 0-6.61 1.26-9.13 3.78-5.04 5.04-5.04 13.22 0 18.27 2.52 2.52 5.83 3.78 9.13 3.78s6.61-1.26 9.13-3.78c5.04-5.04 5.04-13.22 0-18.27a12.88 12.88 0 0 0-9.13-3.78ZM41.1 44.13l-7.64-7.64s.82-.52 1.36-1.06c.63-.63.98-1.28.98-1.28l9.98 9.98a3.326 3.326 0 0 1-4.69 0Z"></path>
                  </g>
                </SearchIconSm>
              </SearchSm>
            </UtilsWrapper>
          </TopHeaderContent>
        </Wrapper>
      </TopHeader>
    </HeaderWrapper>
  )
}

export default Header
