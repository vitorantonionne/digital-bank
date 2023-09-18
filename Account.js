module.exports = class Account {
  #balance
  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposit = []
    this.loans = []
    this.transfers = []
  }

  get Balance() {
    return this.#balance
  }

  addDeposit(deposit) {
    this.#balance += deposit.value
    this.#balance.push(deposit)
  }

  addLoan(loan) {
    this.#balance += loan.value
    this.loans.push(loan)
  }

  addTansfer(transfer) {
    if (this.transfers.userTransfer.email === this.owner.email) {
      this.#balance -= transfer.value
      this.transfers.push(transfer)
    } else if (transfer.userReceive.email === this.owner.email) {
      this.#balance -= transfer.value
      this.transfers.push(transfer)
    }
  }
}