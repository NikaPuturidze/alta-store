import { Wrapper } from '../../../../styles/wrapper'
import { useTranslation } from 'react-i18next'
import {
  BottomHeader,
  BottomHeaderWrapepr,
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
  UtilsContent,
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
  Utils,
  UtilsWrapper,
  PhoneIcon,
  PhoneNumberWrapper,
  NumberSpan,
  LinkTo,
  CategoriesContentWrapper,
  CategoriesContent,
  CategoriesList,
  ListElement,
  ListLink,
  ElementIconWrapper,
  ElementName,
  ElementContent,
  ParentCategoryItem,
  ParentCategoryLink,
  SubCategories,
  SubCategoryItem,
  SubCategoryLink,
  LogoLink,
} from './style'
import { useFetch } from '../../../../hooks/useFetch'
import { getCategories } from '../services/getCategories'
import type { IGetCategories } from '../interfaces/getCategories.interface'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { hardcodedStyle } from './hardcodedHeight'
import { HoverPurple } from '../../../../styles/hover-purple'

const Header = () => {
  const { t, i18n } = useTranslation()
  const { data: categories } = useFetch<IGetCategories[]>({
    fetchData: getCategories,
    key: ['header', i18n.language],
  })
  const [categoriesState, setCategoriesState] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

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
            <LogoLink to={'/'}>
              <Logo src="https://alta.ge/images/logo.svg" alt="Alta" decoding="async" />
            </LogoLink>
            <HoverPurple>
              <CategoriesWrapper
                onMouseEnter={() => setCategoriesState(true)}
                onMouseLeave={() => {
                  setCategoriesState(false)
                  setIndex(null)
                }}
              >
                <CategoriesButton>
                  <CategoriesIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path stroke="#151515" d="M2.5 10h15m-15-5h15m-15 10h15"></path>
                  </CategoriesIcon>
                  {t('categories')}
                </CategoriesButton>

                <CategoriesContentWrapper>
                  <AnimatePresence initial={false}>
                    {categoriesState && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', overflow: 'hidden' }}
                      >
                        <CategoriesContent>
                          <CategoriesList>
                            {categories &&
                              categories.map((c, i) => (
                                <ListElement onMouseEnter={() => setIndex(i)} key={i}>
                                  <ListLink to={c.url}>
                                    <ElementIconWrapper>
                                      <img src={c.imageUrl ?? undefined} alt={`${c.name}`} />
                                    </ElementIconWrapper>
                                    <ElementName>{c.name}</ElementName>
                                  </ListLink>
                                </ListElement>
                              ))}
                          </CategoriesList>
                        </CategoriesContent>
                        {index != null ? (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: [0, 682.5, 630.5, 650] }}
                            transition={{
                              duration: 0.6,
                              times: [0, 0.4, 0.7, 1],
                              ease: 'easeOut',
                            }}
                            style={{
                              overflow: 'hidden',
                              borderLeft: '1px solid var(--color-light-gray-1)',
                            }}
                          >
                            <ElementContent style={hardcodedStyle(index)}>
                              {(categories?.[index]?.childItems ?? []).map((child) => (
                                <ParentCategoryItem key={child.id}>
                                  <ParentCategoryLink to={child.url}>
                                    {child.name}
                                  </ParentCategoryLink>
                                  <SubCategories>
                                    {child.childItems?.map((child) => (
                                      <SubCategoryItem key={child.id}>
                                        <SubCategoryLink to={child.url}>
                                          {child.name}
                                        </SubCategoryLink>
                                      </SubCategoryItem>
                                    ))}
                                  </SubCategories>
                                </ParentCategoryItem>
                              ))}
                            </ElementContent>
                          </motion.div>
                        ) : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CategoriesContentWrapper>
              </CategoriesWrapper>
            </HoverPurple>
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
              <HoverPurple>
                <CircleWrapper>
                  <CircleImage
                    src="https://alta.ge/icons/cart-header.svg"
                    loading="lazy"
                    alt="cart icon"
                  />
                </CircleWrapper>
              </HoverPurple>
              <HoverPurple>
                <CircleWrapper>
                  <CircleImage
                    src="https://alta.ge/icons/wishlist-header.svg"
                    loading="lazy"
                    alt="wishlist icon"
                  />
                </CircleWrapper>
              </HoverPurple>
              <HoverPurple>
                <SignInWrapper>
                  <SignInButton>
                    <SignInIcon
                      xmlns="http://www.w3.org/2000/svg"
                      baseProfile="tiny"
                      viewBox="0 0 56.69 56.69"
                    >
                      <g data-name="Layer_1">
                        <circle cx="28.35" cy="28.35" r="28.35" fill="#fff"></circle>
                        <path d="M28.35 12.94c-8.51 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4 15.4-6.89 15.4-15.4-6.89-15.4-15.4-15.4ZM16.26 28.35c0-6.67 5.42-12.09 12.09-12.09s12.09 5.42 12.09 12.09c0 2.42-.72 4.68-1.96 6.57-2.89-2.36-6.48-3.67-10.19-3.67s-7.23 1.3-10.11 3.62a12.018 12.018 0 0 1-1.92-6.52Zm12.09 12.08c-3.07 0-5.88-1.15-8.01-3.05 2.28-1.81 5.08-2.83 7.95-2.83s5.73 1.03 8.02 2.87c-2.13 1.87-4.91 3-7.96 3Z"></path>
                        <path d="M28.35 21.75c1.41 0 2.55 1.15 2.55 2.55s-1.15 2.55-2.55 2.55-2.55-1.15-2.55-2.55 1.15-2.55 2.55-2.55Zm0-2.95c-3.04 0-5.51 2.47-5.51 5.51s2.47 5.51 5.51 5.51 5.51-2.47 5.51-5.51-2.47-5.51-5.51-5.51Z"></path>
                      </g>
                    </SignInIcon>
                    <SignInText>{t('signIn')}</SignInText>
                  </SignInButton>
                </SignInWrapper>
              </HoverPurple>
              <HoverPurple>
                <LanguageWrapper
                  onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ka' : 'en')}
                >
                  <Language>{t('currentLanguage')}</Language>
                </LanguageWrapper>
              </HoverPurple>
              <SearchSm>
                <SearchIconSm
                  xmlns="http://www.w3.org/2000/svg"
                  baseProfile="tiny"
                  viewBox="0 0 56.69 56.69"
                >
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
      <BottomHeader>
        <Wrapper>
          <BottomHeaderWrapepr>
            <Utils>
              <UtilsContent>
                <PhoneIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                  <path
                    fill="#151515"
                    d="M8.268 6.318a.76.76 0 0 0-1.151 0c-.269.265-.538.534-.804.806a.164.164 0 0 1-.223.04c-.173-.095-.36-.17-.528-.276A8.327 8.327 0 0 1 3.55 5.052a4.788 4.788 0 0 1-.725-1.155.164.164 0 0 1 .042-.213c.27-.262.532-.528.797-.797a.768.768 0 0 0 0-1.18l-.633-.634C2.814.857 2.598.637 2.375.418a.768.768 0 0 0-1.152 0c-.272.265-.53.54-.81.803a1.312 1.312 0 0 0-.41.886A3.768 3.768 0 0 0 .292 3.72a9.872 9.872 0 0 0 1.741 2.903 10.75 10.75 0 0 0 3.572 2.794c.611.32 1.28.515 1.968.574a1.46 1.46 0 0 0 1.246-.472c.23-.26.489-.496.735-.742a.77.77 0 0 0 0-1.174c-.424-.428-.853-.857-1.286-1.285ZM9.97 4.445A8.383 8.383 0 0 0 5.523.021a.328.328 0 0 0-.42.187.328.328 0 0 0 .177.433 7.733 7.733 0 0 1 4.1 4.08.328.328 0 0 0 .426.167.328.328 0 0 0 .164-.443ZM5.11 2.421a4.683 4.683 0 0 1 2.486 2.47.328.328 0 0 0 .286.19c.044 0 .088-.01.128-.03a.328.328 0 0 0 .157-.422 5.313 5.313 0 0 0-2.82-2.804.328.328 0 0 0-.41.177.328.328 0 0 0 .173.42Z"
                  ></path>
                </PhoneIcon>
                <PhoneNumberWrapper>
                  <a href="tel:*3838">
                    <NumberSpan>*3838</NumberSpan>
                  </a>
                  <NumberSpan>/</NumberSpan>
                  <a href="tel:032 238-00-38">
                    <NumberSpan>(032) 238-00-38</NumberSpan>
                  </a>
                </PhoneNumberWrapper>
              </UtilsContent>
            </Utils>
            <Utils>
              <UtilsContent>
                <LinkTo to="/blog">{t('blog')}</LinkTo>
              </UtilsContent>
              <UtilsContent>
                <LinkTo to="/branches">{t('shops')}</LinkTo>
              </UtilsContent>
            </Utils>
          </BottomHeaderWrapepr>
        </Wrapper>
      </BottomHeader>
    </HeaderWrapper>
  )
}

export default Header
