import type { IGetBlog } from './interfaces/getBlog.interface'
import type { Section } from './interfaces/getContent.interface'

export type SectionProps = {
  sections: Section | undefined
}

export type BlogProps = {
  blogPostsRes: IGetBlog | undefined
}
