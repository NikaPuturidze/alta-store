import AsideView from './components/Aside'
import ContentView from './components/Content'
import { Wrapper } from './style'

const FilterView = () => {
  return (
    <Wrapper>
      <AsideView></AsideView>
      <ContentView></ContentView>
    </Wrapper>
  )
}

export default FilterView
