import { useTranslation } from 'react-i18next'
import type { SectionProps } from '../../../types'
import { Category, CategoryImg, CategoryText, MegaMenuContent, MegaMenuTitle, MegaMenuWrapper } from './style'

const MegaMenu = ({ sections }: SectionProps) => {
  const { t } = useTranslation()
  return (
    <MegaMenuWrapper>
      <MegaMenuTitle>{t('categories')}</MegaMenuTitle>
      <MegaMenuContent>
        {sections
          ? sections.categories?.map((category, i) => (
              <Category key={i} to={category.route}>
                <CategoryImg src={category.iconUrl} />
                <CategoryText>{category.name}</CategoryText>
              </Category>
            ))
          : null}
      </MegaMenuContent>
    </MegaMenuWrapper>
  )
}

export default MegaMenu
