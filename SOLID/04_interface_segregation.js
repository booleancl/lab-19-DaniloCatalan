/*
  I — Interface segregation principle

  Clients should not be forced to depend upon interfaces that they do not use
*/
class Phone {
  constructor() {}

  phoneCall(number) {}

  takePhoto() {}

  connectToWifi() {}
}

class IPhone extends Phone {}

class Nokia3310 extends Phone {}

module.exports = {
  IPhone,
  Nokia3310
}
