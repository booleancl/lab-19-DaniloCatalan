/*
  S — Single responsibility principle

  A module should be responsible for only one actor. As a consequence, it has only one reason to change
*/

class TodoList {
  constructor() {
    this.items = []
  }

  addItem(text) {
    this.items.push(text)
  }

  removeItem(index) {
    this.items = items.splice(index, 1)
  }

  toString() {
    return this.items.toString()
  }

  // save(filename) {
  //   fs.writeFileSync(filename, this.toString())
  // }

  // load(filename) {
  //   // Some implementation
  // }
}

class TodoListService {
  save(filename) {
    fs.writeFileSync(filename, this.toString())
  }

  load(filename) {
    // Some implementation
  }
}

module.exports = {
  TodoList,
  TodoListService
}
