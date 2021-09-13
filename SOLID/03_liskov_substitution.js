/*
  L — Liskov substitution principle

  If you have a function, that works for a base type, it should work for a derived type
*/
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }
  get height() {
    return this._height
  }

  set width(value) {
    this._width = value
  }
  set height(value) {
    this._height = value
  }

  getArea() {
    return this._width * this._height
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }

  set width(value) {
    this._width = value
    this._height = value
  }

  set height(value) {
    this._height = value
    this._width = value
  }
}

module.exports = {
  Rectangle,
  Square,
}
