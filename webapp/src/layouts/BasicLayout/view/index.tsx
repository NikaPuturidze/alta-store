import type { ReactNode } from 'react'
import { Wrapper } from '../../../styles/wrapper'
import Footer from '../footer/view'
import { Main } from './style'
import Header from '../header/view'

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>{children}</Wrapper>
      </Main>
      <Footer />
    </>
  )
}

export default BasicLayout
