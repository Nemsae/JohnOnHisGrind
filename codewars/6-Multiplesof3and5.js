// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//

function solution(number){
  let count = 0
  let sum = 0

  while (number > 1) {
    count++

    console.log('count: ', count, ' and number: ', number)
    if (!(count%3) && !(count%5)) {
      sum += count
    } else if (!(count%3)) {
      sum += count
    } else if (!(count%5)) {
      console.log('Five')
      sum += count
    }
    console.log('sum: ', sum)

    number--
  }

  return sum
}

// Test.describe("basic tests", function(){
//   test(10,23)
// })
