// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
//
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n){
  //your code here

  let s = n.toString().split('')

  // console.log('s0: ', s);
  let flag = false

  let ans = []

  for (let i = s.length - 1; i >= 0; i--) {
    let num = +s[i]
    let prev = +s[i-1]
    let tmp = num
    let tmp2 = prev

    if (num > prev) console.log('num : ', num, 'prev: ', prev), s[i] = prev, s[i-1] = num, flag = true
    if (flag) return +s.join('')
    // console.log('num: ', num);
    // if (num > prev) ans.push(num, prev) , i--
    // else ans.unshift(num)
    // console.log('ans: ', ans);
    // if (flag) return
  }

  return +s.join('')
}

// console.log(nextBigger(12)) //  21
// console.log(nextBigger(513)) // 531
console.log(nextBigger(2017)) //  2071
console.log(nextBigger(414)) // 441
console.log(nextBigger(144)) // 414

// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)
