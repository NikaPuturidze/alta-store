export const getCatId = (path: string): number => {
  return Number(path.split('-').at(-1)?.replace(/\D/g, ''))
}
