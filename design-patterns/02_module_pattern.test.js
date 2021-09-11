const getAppModule = require('./02_module_pattern')

describe('Module pattern', () => {

  it('handle private values', () => {
    const appModule = getAppModule()

    expect(appModule.initialize).toBeDefined()
    expect(appModule.getActiveItemData).toBeUndefined()
    expect(appModule.setActiveName).toBeUndefined()
  })
})
