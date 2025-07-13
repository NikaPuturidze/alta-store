import { useTranslation } from 'react-i18next'
import { useIsDesktop } from '../../../../../hooks/useIsDesktop'
import type { BlogProps } from '../../../types'
import { Marginator, Title, TitleWrapper } from '../style'
import {
  BlogTItle,
  Content,
  ImageWrapper,
  SmallTitle,
  SwiperSlideWrapper,
  SwiperWrapper,
} from './style'
import { Navigation } from 'swiper/modules'

const BlogsSection = ({ blogPostsRes }: BlogProps) => {
  const isDesktop = useIsDesktop()
  const { t } = useTranslation()

  return (
    <Marginator>
      <TitleWrapper>
        <Title>{t('blog')}</Title>
        <SmallTitle to={'/blog'}>{t('seeAllBlogs')}</SmallTitle>
      </TitleWrapper>
      <Content>
        <SwiperWrapper
          enabled={isDesktop}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation={isDesktop}
          loop={false}
        >
          {blogPostsRes?.blogPosts &&
            blogPostsRes.blogPosts.map((post, i) => (
              <SwiperSlideWrapper key={i}>
                <ImageWrapper>
                  <img src={post.outerImageUrl} alt="" />
                </ImageWrapper>
                <BlogTItle>{post.title}</BlogTItle>
              </SwiperSlideWrapper>
            ))}
        </SwiperWrapper>
      </Content>
    </Marginator>
  )
}

export default BlogsSection
