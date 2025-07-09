export interface IGetBlog {
  blogPosts: blogPosts[]
  developerMessage: string | null
  errors: unknown[]
  filteredTag: unknown
  hasNextPage: boolean
  httpStatusCode: number
  success: boolean
  totalCount: number
  userMessage: string | null
}

export interface blogPosts {
  createDate: string
  description: string
  h1: string
  id: number
  internalImageUrl: string
  metaDescription: string
  metaTitle: string
  orderNo: number
  outerImageUrl: string
  tags: unknown[]
  title: string
  urlName: string
}
