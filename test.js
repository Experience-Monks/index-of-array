var indexOfArray = require('./')
var test = require('tape')

test('index of an array within an array', function (t) {
  t.equal(indexOfArray([
    [ 2, 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 1, 4 ]), 1)

  t.equal(indexOfArray([
    [ 2, 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 1, 4 ], 4), -1)

  t.equal(indexOfArray([
    [ 2, 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 2, 4 ], 0), 0)

  t.equal(indexOfArray([
    [ 2, 'f', 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 2, 'f', 4 ]), 0)

  t.equal(indexOfArray([
    [ 2, 'f', 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 2, 'f' ]), -1)

  t.equal(indexOfArray([
    [ 0, 5 ],
    [ 2, 'f', 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 0, 5 ]), 0)

  t.equal(indexOfArray([
    [ 0, 5 ],
    [ 2, 'f', 4 ],
    [ 1, 4 ],
    [ 0, 5 ]
  ], [ 0, 5 ], -1), 3)
  t.end()
})
