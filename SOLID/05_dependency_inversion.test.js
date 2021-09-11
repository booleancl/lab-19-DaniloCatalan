const { PurchaseHandler, PayPalService, PaymentHandler } = require('./05_dependency_inversion')

describe('Dependency Inversion principle', () => {
  
  it('high level module should not depend on low-level modules', () => {
    jest.spyOn(PayPalService, 'requestPayment')
    jest.spyOn(PaymentHandler, 'requestPayment')

    const purchaseHandler = new PurchaseHandler()

    purchaseHandler.processPayment({ id: '226746a33d0dfg', currency: 'USD' }, 1000)

    expect(PayPalService.requestPayment).not.toHaveBeenCalled()
    expect(PaymentHandler.requestPayment).toHaveBeenCalled()
  })

})