// Formatting a number as price
// Your objective is to add formatting to a plain number to display it as price.
//
// The function should return a string like this:
//
// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.
//
// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function(number) {
  let string = number.toString()
  let negFlag = false
  let fillerFlag = false

  if (number < 0) negFlag = true
  if (typeof number !== 'number') return 'NaN'

  console.log('string: ', string, 'negFlag is : ', negFlag)

  let price = string.split('.')

  //  if no period, need to know so we add zeroes
  if (price.length === 1) fillerFlag = true

  console.log('price: ', price,'fillerFlag is: ', fillerFlag)

  let firstPart = price[0].split('').reverse()
  let firstArr = []

  console.log('firstPart: ', firstPart)
  for (let i = 0; i < price[0].length; i++) {
    let char = firstPart[i]
    let next = firstPart[i+1]
//     console.log('char: ', char, 'i: ', i)
//     if ((i+1) % 3 === 0) {
//       console.log('Sanity: ', i+1, (i+1) % 3)
//       firstArr.push(char)
//       firstArr.push(',')
//     } else {
//       firstArr.push(char)
//     }
    if (next === '-' || next === undefined) {
      firstArr.push(char)
    } else {
      !((i+1) % 3) ? firstArr.push(char, ',') : firstArr.push(char)
    }

  }

  console.log('firstArr: ', firstArr)
//   if (firstArr.reverse()[0] === ',') {
//     firstArr.pop()
//   }

  let firstAns = firstArr.reverse().join('')
  console.log('firstAns: ', firstAns)


  let secondAns = ''

  if (fillerFlag) {
    console.log('filler needed!')
    secondAns = '00'
  } else {
    let secondPart = price[1]
    let firstDigit = price[1][0]
    let secondDigit = price[1][1] || '0'
    secondAns = firstDigit + secondDigit
    console.log('secondPart: ', secondPart, 'secondAns: ', secondAns)
  }

  return firstAns + '.' + secondAns
}
