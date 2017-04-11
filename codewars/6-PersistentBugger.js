// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
   //code me
   if (num < 10) return 0

   let newNum = num.toString().split('').reduce((acc, c,i,a) => {
     return acc*c
   })

   if (newNum >= 10) return persistence(newNum) + 1

   return 1
}
