/*
  D — Dependency Inversion principle

  High-level modules should not depend on low-level modules
*/
class PayPalService {
  static requestPayment(paymentDetails, amount) {
    // Make some call to server
  }
}

class PurchaseHandler {
  processPayment(paymentDetails, amount) {

    const paymentSuccess = PaymentHandler.requestPayment(paymentDetails, amount)

    if (paymentSuccess) {
      // Do something
      return true
    }

    // Do something
    return false
  }
}

class PaymentHandler {
  static requestPayment(paymentDetails, amount) {
    //return PayPalService.requestPayment(paymentDetails, amount)
  }
}

module.exports = {
  PayPalService,
  PurchaseHandler,
  PaymentHandler
}
