const { Rectangle, Square } = require('./03_liskov_substitution')

describe('Liskov substitution principle', () => {
  
  it('should methods works for derived type', () => {
    const rectangle = new Rectangle(3, 2)
    const square = new Square(2)
    
    rectangle.width = 4
    square.width = 4

    expect(rectangle.getArea()).toEqual(8)
    expect(square.getArea()).toEqual(16)
  })

})