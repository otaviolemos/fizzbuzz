export function fizzBuzz(a: number[]): string {
  return a.map((n: number) => {
    return toFizzBuzz(n)
  }).join(', ')
}

export function toFizzBuzz(n: number): string {
  if (divisibleBy3And5(n)) return 'fizzBuzz'
  if (divisibleBy3(n)) return 'fizz'
  if (divisibleBy5(n)) return 'buzz'
  return n.toString()
}

function divisibleBy3And5(n: number): boolean {
  return divisibleBy3(n) && divisibleBy5(n)
}

function divisibleBy3(n: number): boolean {
  return n % 3 === 0
}

function divisibleBy5(n: number): boolean {
  return n % 5 === 0
}