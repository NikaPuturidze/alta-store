export interface IGetFilter {
  developerMessage: null
  errors: unknown[]
  httpStatusCode: number
  maxPrice: number
  minPrice: number
  specifications: ISpecification[]
  success: boolean
  userMessage: null
}

export interface ISpecification {
  id: number
  name: string
  nameUrlFriendly: string
  values: IValue[]
}

export interface IValue {
  id: number
  orderNo: number
  value: string
  valueUrlFriendly: string
}
