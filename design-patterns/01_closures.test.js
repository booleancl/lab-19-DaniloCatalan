const { counterHandler } = require('./01_closures')


describe('Closures', () => {

  it('can handle inner value from outside', () => {
    const { increment, decrement } = counterHandler(0)

    expect(increment(1)).toEqual(1)
    expect(increment(2)).toEqual(3)
    expect(decrement(1)).toEqual(2)
    expect(increment(3)).toEqual(5)
    expect(decrement(2)).toEqual(3)

  })
})


