export const hardcodedStyle = (index: number) => {
  let height = 0
  switch (index) {
    case 0:
      height = 608
      break
    case 1:
      height = 1728
      break
    case 2:
      height = 320
      break
    case 3:
      height = 800
      break
    case 4:
      height = 384
      break
    case 5:
      height = 672
      break
    case 6:
      height = 960
      break
    case 7:
      height = 256
      break
    case 8:
    case 9:
    case 10:
      height = 288
      break
    case 11:
    case 12:
    case 13:
      height = 240
      break
    default:
      break
  }

  return { height: height }
}
