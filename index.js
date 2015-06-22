var arrayEqual = require('array-equal')

module.exports = indexOfArray
function indexOfArray (array, searchElement, fromIndex) {
  // use uint32
  var len = array.length >>> 0
  if (len === 0) {
    return -1
  }

  var start = +fromIndex || 0
  if (Math.abs(start) === Infinity) {
    start = 0
  }

  if (start >= len) {
    return -1
  }

  // allow negative fromIndex
  start = Math.max(start >= 0 ? start : len - Math.abs(start), 0)

  // search
  while (start < len) {
    if (arrayEqual(array[start], searchElement)) {
      return start
    }
    start++
  }
  return -1
}
