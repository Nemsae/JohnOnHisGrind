// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
//
// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
// The result will be an array of arrays(in C an array of Pair), each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
//
// Examples:
//
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.


function listSquared(m, n) {
    // your code
    let ans = [] // push the array sets into ans
    let max = 42
    // let max = n - m
    // console.log('max # loops: ', max)

    while (max) {
      let divisors = [m]
      let half = Math.floor(m/2)

      for (let i = 1; i <= half; i++) {
        if (m % i === 0) {
          divisors.push(i)
        }
      }

      //  find all divisors of m
      // console.log('divisors: ', divisors);

      //  square all divisors
      //  add all divisors
      let x = divisors.reduce((c, i , a) => {
        return c + i*i
      }, 0)

      // console.log('x: ', x);

      //  check if sum is a square itself
      if (Number.isInteger(Math.sqrt(x))) ans.push([m, x])

      m++
      max--
    }

    return ans
}

let m1 = 1, n1 = 250
let m2 = 42, n2 = 250
let m3 = 250, n3 = 500

console.log(listSquared(m1, n1))
console.log(listSquared(m2, n2))
console.log(listSquared(m3, n3))


// Test.describe("Basic tests",function() {
//   Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
//   Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
//   Test.assertSimilar(listSquared(250, 500), [[287, 84100]])
//
// })
