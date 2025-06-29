import type { SectionProps } from '../../../types'
import { Marginator } from '../style'
import { Content, Image } from './style'

const SingleSection = ({ sections }: SectionProps) => {
  return (
    <>
      {sections?.banners && sections?.banners ? (
        <Marginator>
          <Content to={sections?.banners[0].route}>
            <Image src={sections?.banners[0].webImageUrl} />
          </Content>
        </Marginator>
      ) : null}
    </>
  )
}

export default SingleSection
