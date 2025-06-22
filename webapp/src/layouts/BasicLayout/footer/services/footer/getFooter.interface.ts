export interface IGetFooter {
  siteMap: unknown[]
  showInTopMenu: unknown[]
  firstFooter: FooterItem[]
  secondFooter: FooterItem[]
  thirdFooter: unknown[]
  showInBlocks: unknown[]
  httpStatusCode: number
  userMessage: string | null
  developerMessage: string | null
  success: boolean
  errors: unknown[]
}

interface FooterItem {
  id: number
  title: string
  orderNo: number
  urlName: string
  metaTitle: string
  h1: string
  metaDescription: string
}
