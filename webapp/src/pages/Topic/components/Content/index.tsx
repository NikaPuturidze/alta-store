import { useTopicProvider } from '../../context/TopicProvider'
import { Wrapper } from './style'

const Content = () => {
  const { data: topicResponse } = useTopicProvider()

  const sanitazedTopicResponse = topicResponse?.content.replaceAll(
    'https://beta.alta.ge',
    window.location.origin
  )

  return (
    <Wrapper dangerouslySetInnerHTML={{ __html: sanitazedTopicResponse as string | TrustedHTML }} />
  )
}

export default Content
