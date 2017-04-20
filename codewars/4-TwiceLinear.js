// Consider a sequence u where u is defined as follows:
//
// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
//
// Task:
//
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
//
// Example:
//
// dbl_linear(10) should return 22
//
// Note:
//
// Focus attention on efficiency

function dblLinear(n) {
    // your code`
//     console.log('n: ', n)
//     let memo = {'1y': 3, '1z': 4}
    let ans

    if (n === 0) ans = 1

    let seq = [1, 3, 4]
    let count = 1

    while (n) {
      let x = seq[count]

      console.log('x: ', x)

      let y, z
      if (memo[`${x}y`]) y = memo[`${x}y`]
      else y = 2 * x + 1, memo[`${x}y`] = y

      if (memo[`${x}z`]) y = memo[`${x}z`]
      else z = 3 * x + 1, memo[`${x}z`] = z

      console.log('memo: ', memo)

      count++
      n--
    }
 return ans
}

let n1 = 10   //  22
let n2 = 20   //  57
let n3 = 30   //  91
let n4 = 50   //  175
let n5 = 100  //  447

dblLinear(n1)
// dblLinear(n2)
// dblLinear(n3)
// dblLinear(n4)
// dblLinear(n5)
