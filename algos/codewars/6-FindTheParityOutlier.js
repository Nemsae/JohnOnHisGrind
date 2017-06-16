// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
//
// For example:
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
//
// Should return: 11
//
// [160, 3, 1719, 19, 11, 13, -21]
//
// Should return: 160

// function findOutlier(integers){
//   //your code here
//   let odds = []
//   let evens = []
//
//   integers.forEach(num => {
//     num % 2 ? odds.push(num) : evens.push(num)
//   })
//
//   return odds.length === 1 ? odds[0] : evens[0]
// }

function findOutlier(integers){
  //your code here
  let odds = integers.filter(num => num%2)
  let evens = integers.filter(num => !(num%2))

  return odds.length === 1 ? odds[0] : evens[0]
}
