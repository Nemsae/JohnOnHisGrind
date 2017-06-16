var expect = require("chai").expect;
var assert = require("chai").assert;
require("chai").should();

// Snail Sort
//
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

var expect = require('chai').expect
var assert = require('chai').assert
require('chai').should()

var expect = require('chai').expect
var assert = require('chai').assert
require('chai').should()

snail = function(array) {
  // enjoy
  let r = array.length
  let c = array[0].length
  let max = r * c
  let ans = []
  let directions = 'right'
  let l = 0
  let w = 0

  if (array.length === 1) return array[0]
  if (!(r-1)) return []

  // for (let i = 0, j = 0, k = 0, char = array[i][j]; k < max; k++) {
  for (let i = 0, j = 0, k = 0, ; k < max; k++) {
    let char = array[i][j]

    if (directions === 'right') {
      ans.push(char)

      if (w + 1 === c) directions = 'down', i++, r--, w = 0
      else

        j++, w++
    } else if (directions === 'down') {
      ans.push(char)

      if (l+1 === r) directions = 'left', j--, c--, l = 0
      else
        i++, l++
    } else if (directions === 'left') {
      ans.push(char)

      if (w+1 === c) directions = 'up', i--, r--, w = 0
      else
        j--, w++
    } else if (directions === 'up') {
      ans.push(char)

      if (l+1 === r) directions = 'right', j++, c--, l = 0
      else
        i--, l++
    }
  }
  return ans
}

let arr0 = [[1]]
let arr1 = [[1,2,3],
         [4,5,6],
         [7,8,9]]
let arr2 = [ [ 1, 2, 3, 4, 5, 6, 7 ],
  [ 8, 9, 10, 11, 12, 13, 14 ],
  [ 15, 16, 17, 18, 19, 20, 21 ],
  [ 22, 23, 24, 25, 26, 27, 28 ],
  [ 29, 30, 31, 32, 33, 34, 35 ],
  [ 36, 37, 38, 39, 40, 41, 42 ],
  [ 43, 44, 45, 46, 47, 48, 49 ] ]

console.log(snail(arr2))
// describe('Solution', function(){
//   it('My own test', function(){
//     Test.assertSimilar(snail(arr1), [1,2,3,6,9,8,7,4,5], 'Que?')
//   })
//   it('My own test', function(){
//     Test.assertSimilar(snail([[1]]), [1], 'Que?')
//   })
//   it('My own test', function(){
//     Test.assertSimilar(snail(arr2), [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 49, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 13, 20, 27, 34, 41, 40, 39, 38, 37, 30, 23, 16, 17, 18, 19, 26, 33, 32, 31, 24, 25], 'Que?')
//   })
// })
