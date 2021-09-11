/* 
  Closures

  The closure is an inner function which always has access to the variables and parameters of its outer function, even when the outer function has returned.
*/

function counterHandler(initValue) {
  let currentValue = initValue;

  const increment = (step) => {
    currentValue += step
    console.log(`currentValue = ${currentValue}`)
    return currentValue
  }

  const decrement = (step) => {
    currentValue -= step
    console.log(`currentValue = ${currentValue}`)
    return currentValue
  }
}

module.exports = {
  counterHandler,
}