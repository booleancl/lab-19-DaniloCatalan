/**
 * @jest-environment jsdom
**/

/* 
  Module pattern

  The module pattern overcomes some of the limitations of the object literal, offering privacy for variables and functions while exposing a public API if desired
*/

const AppModule = () => {

  const app = {
    carouselWrapper: '#landingCarousel',
  
    getActiveItemData() {
      const activeItem = this.carouselWrapper
        .find('.carousel-item.active')
      return activeItem.data()
    },
  
    setActiveName() {
      const carouselInfoName = $('.carousel-info h2')
      const carouselInfoDescription = $('.carousel-info p')
      const { name, description } = this.getActiveItemData()
      
      carouselInfoName.text(name)
      carouselInfoDescription.text(description)
    },
  
    initialize() {
      this.carouselWrapper.on('slid.bs.carousel', () => this.setActiveName())
  
      this.setActiveName()
    }
  }

  return {
    initialize: app.initialize
  }
}

module.exports = AppModule
