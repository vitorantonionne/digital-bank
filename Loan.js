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

  static getFees() {
    return this.#fees
  }

  static setFees(newFees) {
    Loan.#fees = 1 + (newFees / 100)
  }

}