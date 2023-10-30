import { VendingMachine } from '../src/vending-machine.mjs'

describe('vending machine should', () => {
  test('accept coins', () => {
    const vendingMachine = new VendingMachine()
    expect(vendingMachine.insertCoin('nickel')).toBe(true)
    expect(vendingMachine.insertCoin('dime')).toBe(true)
    expect(vendingMachine.insertCoin('quarter')).toBe(true)
  })

  test('reject invalid coin', () => {
    const invalidCoin = 'penny'

    const vendingMachine = new VendingMachine()

    expect(vendingMachine.insertCoin(invalidCoin)).toBe(false)
  })

  test('reject invalid coin unknow', () => {
    const invalidCoin = 'bolivares'

    const vendingMachine = new VendingMachine()

    expect(vendingMachine.insertCoin(invalidCoin)).toBe(false)
  })
})
