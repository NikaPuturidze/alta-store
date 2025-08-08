import { useTopicProvider } from '../../context/TopicProvider'
import { Wrapper } from './style'

const Content = () => {
  const { data: topicResponse } = useTopicProvider()
  const sanitazedTopicResponse = topicResponse?.content.replaceAll(
    'https://beta.alta.ge',
    'http://localhost:5173'
  )
  return (
    <Wrapper dangerouslySetInnerHTML={{ __html: sanitazedTopicResponse as string | TrustedHTML }} />
  )
}

export default Content
