# index-of-array

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Find the index of an array (such as a XYZ point) within a two-dimensional array. The interface is the same as [`Array.prototype.indexOf()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

## Example

```js
var indexOfArray = require('index-of-array')

var array = [
  [ 0, 2, 3 ],
  [ 1, 4, 2 ]
]

indexOfArray(array, [0, 2, 3]) 
//=> 0

indexOfArray(array, [0, 0])
//=> -1

indexOfArray(array, [0, 2, 3], 1)
//=> -1
```

## Install

```sh
npm install index-of-array --save
```

## Usage

[![NPM](https://nodei.co/npm/index-of-array.png)](https://www.npmjs.com/package/index-of-array)

#### `idx = indexOfArray(array, search, [fromIndex])`

Finds the index of the `search` array inside the two-dimensional `array`. Optionally searches starting from the `fromIndex` value (can be negative to indicate "from end").

See [`Array.prototype.indexOf()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) for further details.

## See Also

- [index-of](https://www.npmjs.com/package/index-of)
- [array-equal](https://www.npmjs.com/package/array-equal)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/index-of-array/blob/master/LICENSE.md) for details.
