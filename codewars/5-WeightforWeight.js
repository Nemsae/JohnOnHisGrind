// Example:
//
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
//
// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
//
// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(str) {
    console.log('str: ', str);
    if (str === '') return ''
    // your code
    let dict = {}
    let weights = {}
    let arr = str.split(' ')
    for (let i = arr.length - 1; i >= 0; i--) {
    // str.split(' ').map((num) => {
      //  instead of split (while loop and access string by index)
      let num = arr[i]
      let x = num.length - 1
      let s = 0
      let wFlag = false

      while (x > -1) {
        console.log('num[x]: ', num[x]);
        s += +num[x]
        x--
      }
      console.log('num: ', num);

      //  I need to be able to know if a 'weight' is already present,
      // if (weights[s]) {
      //   console.log('WEIGHT EXISTS!');
      //   weights[s]++
      //   wFlag = true
      // } else {
      //   weights[s] = 1
      // }

      if (dict[num]) {
        // console.log('KEY EXISTS:', dict);
        if (wFlag) {
          console.log('Since weight exits, record with modified weight')
          // dict[+num + .1] = s + weights[s]/10
          dict[+num + .1] = s + weights[s]/10
        } else {
          dict[+num + .1] = s
        }
        console.log('Sanity:1', dict);
      } else {
        if (wFlag) {
          dict[num] = s + weights[s]/10
        } else {
          dict[num] = s
        }
      }
      console.log('dict: ', dict);
      console.log('s: ', s);

      // console.log('num: ', typeof num);
    }

    let keys = Object.keys(dict)
    console.log('keys: ', keys);
    let x = keys.sort((a, b) => {
      // if (dict[a] === dict[b]) {
      //   console.log('Same!')
      //   let x = a.split('.')
      //   let y = b.split('.')
      //   if ()
      // }


      // let x = a.split('.')
      // let y = b.split('.')
      // console.log('a: ', a, 'b: ', b);
      // if (x.length > 1) {
      //   console.log('a duplicate: ', a);
      // }
      // if (y.length > 1) {
      //   console.log('b duplicate: ', b, 'vs ', a);
      //   console.log('y[0]: ', y[0]);
      //   console.log('x[0]: ', x[0]);
      //   if (y[0] === x[0]) {
      //     console.log('Sanity:0000000');
      //   }
      // }
      if (dict[a] === dict[b]) {
        console.log('SAME WEIGHT DETECTED', 'a: ', a, 'b: ', b)
        console.log('a-b: ', a-b);
        // console.log('a>b: ', a>b);
        // console.log('a<b: ', a<b);
        if (a < b) return -1
        else return 1
        // return a > b
      } else {
        return  dict[a] - dict[b]
      }
    // }).join(' ')
  }).map(num2 => Math.floor(num2)).join(' ')
  // }).join(' ')

    // console.log('x: ', x);
    return x

    // console.log('keys: ', keys);
    //
    // console.log('dict: ', dict);
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

// 71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81
// Expected: '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703',

// 306579 57 496488 2 169924 116 247561 46 346314 200 147405 24 243225 56 373770 178 75149 163 125274 18 92
// Expected: '2 200 24 116 18 163 46 56 92 57 178 243225 125274 147405 346314 247561 75149 373770 306579 169924 496488'

// Test.it("Basic tests",function() {
//     Test.assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//     Test.assertEquals(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
// })})
