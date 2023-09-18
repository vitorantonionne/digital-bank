const Installment = require("./Installment")

module.exports = class Loan{
  static #fees = 1.05

  constructor(valueLoan, installments) {
    this.valueLoan = valueLoan
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment((valueLoan * Loan.#fees) / installments), i)
    }
    this.createDate = new Date()
  }

  static getFee() {
    return this.#fees
  }

  static set Fee(newFees) {
    Loan.#fees = 1 + (newFees / 100)
  }

}