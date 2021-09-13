/*
  I — Interface segregation principle

  Clients should not be forced to depend upon interfaces that they do not use
*/
class Phone {
  constructor() {}

  phoneCall(number) {}
}
class SmartPhone extends Phone {
  takePhoto() {}

  connectToWifi() {}
}
class IPhone extends SmartPhone {}

class Nokia3310 extends Phone {}

module.exports = {
  IPhone,
  Nokia3310,
  SmartPhone
}
