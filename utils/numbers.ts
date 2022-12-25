export function range(num1: number, num2: number): number[] {
  return Array.from({ length: num2 - num1 }, (_, i) => num1 + i)
}

export function inclusiveRange(num1: number, num2: number): number[] {
  return Array.from({ length: num2 - num1 + 1 }, (_, i) => num1 + i)
}

export const rangesOverlap = ([[l1, h1], [l2, h2]]: number[][]): boolean =>
  !(l1 > h2 || l2 > h1)

export const positiveMod = (n: number, m: number): number =>
  ((n % m) + m) % m

export const lcm = (a: number, b: number): number => {
  const [l, h] = [Math.min(a, b), Math. max(a, b)]
  let m = h
  while (m % l !== 0) {
    m += h
  }
  return m
}