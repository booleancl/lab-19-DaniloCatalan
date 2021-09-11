const { IPhone, Nokia3310 } = require('./04_interface_segregation')

describe('Interface segregation principle', () => {
  
  it('should does not use methods that not be used', () => {
    const smartPhone = new IPhone()
    const oldPhone = new Nokia3310()

    expect(oldPhone.phoneCall).toBeDefined()
    expect(oldPhone.takePhoto).toBeUndefined()
    expect(oldPhone.connectToWifi).toBeUndefined()

    expect(smartPhone.phoneCall).toBeDefined()
    expect(smartPhone.takePhoto).toBeDefined()
    expect(smartPhone.connectToWifi).toBeDefined()
  })

})