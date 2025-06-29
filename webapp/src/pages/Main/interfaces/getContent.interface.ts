export interface IGetContent {
  metaTitle: string
  metaDescription: string
  metaH1: string
  section: Section[]
}

export interface Section {
  id: number
  title: string | null
  sectionType: number
  bannerPosition: number | null
  bannerSectionType?: number | null
  bannerFinishDate?: string | null
  promotionFinishDate?: string | null
  orderNumber: number | null
  isActiveOrderSection: boolean
  colorValue: string | null
  banners: Banner[] | null
  products: Product[] | null
  categories: Category[] | null
  brands: Brand | null
  promotions: Promotion | null
  promotionProducts: Product[] | null
  activeOrders: unknown
}

export interface Banner {
  title: string
  bannerType: number
  productId: number | null
  promotionId: number | null
  route: string
  isAbsoluteUrl: boolean
  mobileImageUrl: string
  webImageUrl: string
  orderNo: number
  position: number
  mobileDimensions?: {
    heightInPixels: number
    widthInPixels: number
  }
  webDimensions?: {
    heightInPixels: number
    widthInPixels: number
  }
}

export interface Product {
  id: number
  name: string
  price: number
  previousPrice: number | null
  imageUrl: string
  barCode: string
  route: string
  categoryId: number
  categoryName: string
  brandName: string | null
  storageQuantity: number
  parentCategoryId: number
  parentCategoryName: string
  iconUrl: string
  discountAmount: number
  discountPercent: number
  hasDiscount: boolean
  labelText: string | null
  labelColor: string
  maxQuantityInCart: number
  isFavorite: boolean
  isInCart: boolean
  isPreOrderProduct: boolean
  preOrderProductAvailableOn: string | null
  isNightPromotion: boolean
  onSaleSoon: boolean
  doNotRecordStock: boolean
  disableBuyButton: boolean
  promotionAvailableQuantity: number | null
  promotionSoldQuantity: number | null
  requestedQuantity: number
  orderNo: number
  giftType: string | null
  gifts: unknown
}

export interface Category {
  id: number
  name: string
  route: string
  iconUrl?: string
  parentCategoryId?: number | null
  orderNo?: number
}

export interface Brand {
  id: number
  name: string
  iconUrl?: string
}

export interface Promotion {
  id: number
  name: string
  sectionImageUrl: string
  desktopImageUrl: string | null
  mobileImageUrl: string | null
  finishDate: string
  orderNo: number
  route: string
}
