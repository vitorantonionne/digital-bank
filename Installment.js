module.exports = class Installment {
  constructor(valuerInstallments, numberPortion) {
    this.valuerInstallments = valuerInstallments
    this.numberPortion = numberPortion
    this.status = 'pending'
  }
}