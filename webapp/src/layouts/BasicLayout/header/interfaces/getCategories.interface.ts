export interface IGetCategories {
  categoryId: number
  childItems: IGetCategories[] | null
  description: null
  forMain: boolean
  iconId: null
  iconUrl: null
  id: number
  imageId: number | null
  imageUrl: null | string
  isActive: boolean
  isExpanded: boolean
  isNew: boolean
  name: string
  order: number
  parentItemId: number | null
  url: string
}
