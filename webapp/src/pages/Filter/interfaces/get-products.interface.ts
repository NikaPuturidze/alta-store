export interface IGetProducts {
  categories: ICategory[]
  category1: null
  category2: null
  categoryName: string
  categoryRouteEn: string
  categoryRouteGe: string
  categoryRouteRu: string
  developerMessage: null
  errors: unknown[]
  h1: null
  h2: string
  hasNextPage: boolean
  httpStatusCode: number
  megaMenuUrlEn: string
  megaMenuUrlGe: string
  megaMenuUrlRu: string
  metaDescription: null
  metaTitle: null
  parentCategoryName: null
  popularSearches: string[]
  products: IProduct[]
  productsCount: number
  success: boolean
  userMessage: null
}

export interface ICategory {
  categoryId: number
  categoryName: string
  parentCategoryId: number
  parentCategoryName: string
}

export interface IProduct {
  barCode: string
  brandName: string | null
  categoryId: number
  categoryName: string
  disableBuyButton: boolean
  discountAmount: number
  discountPercent: number
  doNotRecordStock: boolean
  giftType: null
  gifts: null
  hasDiscount: boolean
  iconUrl: null
  id: number
  imageUrl: string
  isFavorite: boolean
  isInCart: boolean
  isNightPromotion: boolean
  isPreOrderProduct: boolean
  labelColor: null
  labelText: null
  maxQuantityInCart: number
  name: string
  onSaleSoon: boolean
  orderNo: number
  parentCategoryId: number
  parentCategoryName: string
  preOrderProductAvailableOn: null
  previousPrice: number | null
  price: number
  promotionAvailableQuantity: null
  promotionSoldQuantity: null
  requestedQuantity: number
  route: string
  storageQuantity: number
}
