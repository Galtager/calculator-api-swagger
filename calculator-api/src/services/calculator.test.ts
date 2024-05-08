import { CalcService } from "./calculator";

it('check add operator result', async () => {
    let result = CalcService.calc(10, 10, 'add')
    expect(result).toBe(20)
    result = CalcService.calc(2, 35, 'add')
    expect(result).toBe(37)
    result = CalcService.calc(10, 23123, 'add')
    expect(result).toBe(23133)
})
it('check sub operator result', async () => {
    let result = CalcService.calc(10, 10, 'sub')
    expect(result).toBe(0)
    result = CalcService.calc(10, 0, 'sub')
    expect(result).toBe(10)
    result = CalcService.calc(0, 10, 'sub')
    expect(result).toBe(-10)
})

// the api validators will guard for dividing by zero , already tested in the api test module
it('check div operator result', async () => {
    let result = CalcService.calc(10, 10, 'div')
    expect(result).toBe(1)
    result = CalcService.calc(0, 10, 'div')
    expect(result).toBe(0)
    result = CalcService.calc(10, 0, 'div')
    expect(result).toBe(Infinity)
})
it('check multiply operator result', async () => {
    let result = CalcService.calc(10, 10, 'multiply')
    expect(result).toBe(100)
    result = CalcService.calc(0, 10, 'multiply')
    expect(result).toBe(0)
    result = CalcService.calc(-2, 50, 'multiply')
    expect(result).toBe(-100)
})
it('check pow operator result', async () => {
    let result = CalcService.calc(10, 2, 'pow')
    expect(result).toBe(100)
    result = CalcService.calc(0, 10, 'pow')
    expect(result).toBe(0)
    result = CalcService.calc(2, 0, 'pow')
    expect(result).toBe(1)
})
