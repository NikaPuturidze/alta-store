import { useIsDesktop } from '../../../../../hooks/useIsDesktop'
import type { SectionProps } from '../../../types'
import { Marginator } from '../style'
import { Content, Image } from './style'

const SingleSection = ({ sections }: SectionProps) => {
  const isDesktop = useIsDesktop()
  const single = sections?.banners
  return (
    <>
      {single ? (
        <Marginator>
          <Content to={single[0].route}>
            <Image src={isDesktop ? single[0].webImageUrl : single[0].mobileImageUrl} />
          </Content>
        </Marginator>
      ) : null}
    </>
  )
}

export default SingleSection
