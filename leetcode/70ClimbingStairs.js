// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Note: Given n will be a positive integer.


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let ways = 0
  let memo = {}

  function climb (x, n) {
    if (memo[x]) return memo[x]

    if (x > n) return 0
    if (x === n) {
      return 1
    }
    // console.log('x: ', x);
    let paths = climb(x + 1, n) + climb(x + 2, n)
    memo[x] = paths
    return paths
  }

  return climb(0, n)
};


// console.log(climbStairs(4)) //  5
// console.log(climbStairs(5)) //  8
console.log(climbStairs(38)) //  5
