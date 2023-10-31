export class VendingMachine {
  static coins = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
  }

  insertCoin(coin) {
    if (coin === 'penny') return false
    if (coin === 'nickel' || coin === 'dime' || coin === 'quarter') return true
    return false
  }
}
