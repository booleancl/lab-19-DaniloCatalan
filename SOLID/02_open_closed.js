/*
  O — Open closed principle

  Modules should be open for extension but closed for modification
*/
class Coder {
  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName
    this.language = language
    this.hobby = hobby
    this.education = education
    this.workplace = workplace
    this.position = position
  }
}

class CoderFilter {
  filterByName(coders, fullName) {
    return coders.filter(coder => coder.fullName === fullName)
  }

  filterBySize(coders, language) {
    return coders.filter(coder => coder.language === language)
  }

  filterByHobby(coders, hobby) {
    return coders.filter(coder => coder.hobby === hobby)
  }

  filterByProp(coders,prop, value) {
    return coders.filter(coder => coder[prop] === value )
  }
}

module.exports = {
  Coder,
  CoderFilter,
}
