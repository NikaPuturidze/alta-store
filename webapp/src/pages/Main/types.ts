import type { Section } from './interfaces/getContent.interface'

const SECTION_TYPES = {
  DOUBLE_SECTION: 2,
  FOUR_SECTION: 3,
} as const

export type SECTION_TYPES = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES]

export type SectionProps = {
  sections: Section | undefined
}
