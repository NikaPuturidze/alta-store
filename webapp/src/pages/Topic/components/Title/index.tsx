import { useTopicProvider } from '../../context/TopicProvider'
import { Wrapper, TopicTitle } from './style'

const TitleView = () => {
  const { data: topicResponse } = useTopicProvider()

  return (
    <Wrapper>
      <TopicTitle>{topicResponse?.title}</TopicTitle>
    </Wrapper>
  )
}

export default TitleView
