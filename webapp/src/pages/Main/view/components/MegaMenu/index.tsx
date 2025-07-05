import type { SectionProps } from '../../../types'
import { Category, CategoryImg, CategoryText, Content, Wrapper } from './style'
import { Marginator, Title, TitleWrapper } from '../style'

const MegaMenu = ({ sections }: SectionProps) => {
  return (
    <Wrapper>
      <Marginator>
        <TitleWrapper>
          <Title>{sections?.title?.split('-')[0]}</Title>
        </TitleWrapper>
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
