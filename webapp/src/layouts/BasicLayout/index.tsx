import type { ReactNode } from 'react'
import { Wrapper } from '../../styles/wrapper'
import Header from './header'

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default BasicLayout
