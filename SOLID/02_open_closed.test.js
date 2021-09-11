const { Coder, CoderFilter } = require('./02_open_closed')

describe('Open closed principle', () => {
  
  it('should be open for modification', () => {
    const fullstackDeveloper = new Coder(
      'john doe',
      'english',
      'play guitar',
      'Boolean Academy',
      'In somewhere',
      'Fullstack developer'
    )
    const techLeader = new Coder(
      'ana doe',
      'german',
      'trekking',
      'Boolean Academy',
      'In somewhere',
      'Tech leader'
    )
    const coders = [
      fullstackDeveloper,
      techLeader,
    ]

    const filter = new CoderFilter()

    expect(filter.filterByProp(coders, 'language', 'german')).toEqual([ techLeader ])
  })

})