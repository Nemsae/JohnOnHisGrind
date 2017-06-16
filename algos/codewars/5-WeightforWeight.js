// Example:
//
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
//
// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
//
// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(str) {
    if (str === '') return ''

    let dict = {}
    let arr = str.split(' ')

    for (let i = arr.length - 1; i >= 0; i--) {
      let num = arr[i]
      let x = num.length - 1
      let s = 0

      while (x > -1) {
        s += +num[x]
        x--
      }

      dict[num] ? dict[+num + .1] = s : dict[num] = s
      // if (dict[num]) {
      //     dict[+num + .1] = s
      // } else {
      //     dict[num] = s
      // }
    }

    let keys = Object.keys(dict)

    return keys.sort((a, b) => {
      return dict[a] === dict[b] ? (a < b ? -1 : 1) : dict[a] - dict[b]
      // if (dict[a] === dict[b]) {
      //   if (a < b) return -1
      //   else return 1
      // } else {
      //   return  dict[a] - dict[b]
      // }
    }).map(num2 => Math.floor(num2)).join(' ')
}
let str1 = "103 123 4444 99 2000"
let str2  = "2000 10003 1234000 44444444 9999 11 11 22 123"
let str3 = '71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81'
let str4 = '306579 57 496488 2 169924 116 247561 46 346314 200 147405 24 243225 56 373770 178 75149 163 125274 18 92'

// console.log('Answer:', orderWeight(str2))
// console.log("Answer: 11 11 2000 10003 22 123 1234000 44444444 9999")

// console.log('Answer:', orderWeight(str3))
// console.log("Answer: 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703")

console.log('Answer:', orderWeight(str4))
console.log('Expected: 2 200 24 116 18 163 46 56 92 57 178 243225 125274 147405 346314 247561 75149 373770 306579 169924 496488')
console.log('Passed:', '2 200 24 116 18 163 46 56 92 57 178 243225 125274 147405 346314 247561 75149 373770 306579 169924 496488' === orderWeight(str4))

// 71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81
// Expected: '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703',

// 306579 57 496488 2 169924 116 247561 46 346314 200 147405 24 243225 56 373770 178 75149 163 125274 18 92
// Expected: '2 200 24 116 18 163 46 56 92 57 178 243225 125274 147405 346314 247561 75149 373770 306579 169924 496488'

// Test.it("Basic tests",function() {
//     Test.assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//     Test.assertEquals(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
// })})
