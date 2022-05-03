import { fizzBuzz, toFizzBuzz } from "./fizzbuzz"

describe('FizzBuzz', () => {
  it('should return 1 for 1', () => {
    expect(toFizzBuzz(1)).toEqual('1')
  })

  it('should return fizz for 3', () => {
    expect(toFizzBuzz(3)).toEqual('fizz')
  })

  it('should return buzz for 5', () => {
    expect(toFizzBuzz(5)).toEqual('buzz')
  })

  it('should return fizzBuzz for 15', () => {
    expect(toFizzBuzz(15)).toEqual('fizzBuzz')
  })

  it('should return 1, 2, fizz, 4, buzz for [1, 2, 3, 4, 5]', () => {
    expect(fizzBuzz([1, 2, 3, 4, 5])).toEqual('1, 2, fizz, 4, buzz')
  })
})