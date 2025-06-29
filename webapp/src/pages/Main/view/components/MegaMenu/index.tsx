import { useTranslation } from 'react-i18next'
import type { SectionProps } from '../../../types'
import { Category, CategoryImg, CategoryText, Content, Title, Wrapper } from './style'
import { Marginator } from '../style'

const MegaMenu = ({ sections }: SectionProps) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Marginator>
        <Title>{t('categories')}</Title>
        <Content>
          {sections
            ? sections.categories?.map((category, i) => (
                <Category key={i} to={category.route}>
                  <CategoryImg src={category.iconUrl} />
                  <CategoryText>{category.name}</CategoryText>
                </Category>
              ))
            : null}
        </Content>
      </Marginator>
    </Wrapper>
  )
}

export default MegaMenu
