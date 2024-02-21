export const noop = (() => {}) as (...a: any) => void

export const number2color = (n: number) => {
  let r = 0
  let g = 0
  let b = n
  if (b > 255) {
    ;(g = (b / 255) | 0), (b -= g * 255)
    if (g > 255) {
      ;(r = (g / 255) | 0), (g -= r * 255)
    }
  }
  // console.log([r, g, b])
  // return [r, g, b]
  return `rgb(${r},${g},${b})`
}
export const color2number = (r: number, g: number, b: number) => {
  return r * 65025 + g * 255 + b
}

// console.log(color2number(number2color(14414567)))
