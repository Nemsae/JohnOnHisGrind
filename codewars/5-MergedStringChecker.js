// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
//
// The restriction is that the characters in part1 and part2 are in the same order as in s.
//
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
//
// For example:
//
// 'codewars' is a merge from 'cdw' and 'oears':
//
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, p1, p2) {
  // let length = Math.max(p1.length, p2.length)
  console.log('s: ', s);
  console.log('p1: ', p1);
  console.log('p2: ', p2);

  if (s.length === 0 && p1.length === 0 && p2.length === 0) {
    return true
  } else if (s.length === 0 && (p1.length > 0 || p2.length > 0)) {
    return false
  }

  for (let i = 0, j = 0, k = 0; k < s.length; k++) {
    let char1 = p1[i]
    let char2 = p2[j]
    let next1 = p1[i+1]
    let next2 = p2[j+1]
    let code = s[k]
    let nextCode = s[k+1]
    let ans = ''

    let flag1 = false
    let flag2 = false

    console.log(k, 'code: ', code);
    console.log(k, 'char1: ', char1);
    console.log(k, 'char2: ', char2);

    //  If Neither of the next letters do not match the next code, return false
    // if (next1 !== nextCode && next2 !== nextCode) {
    //   console.log('Next Letters do not match nextCode')
    //   return false
    // }
    if (char2 === code) {
      console.log(k, 'char2 Matches', k)
      if (next2 !== nextCode && code === char1) {
        console.log(k, 'but we switch to char1', k)
        flag1 = true

        ans += char1
      } else {
        console.log(k, 'char2 Matched', k)
        flag2 = true
        ans += char2
      }
    } else if (char1 === code) {
      console.log(k, 'char1 Matches', k)
      if (next1 !== nextCode && code === char2) {
        console.log(k, 'but we switch to char2', k)
        flag2 = true

        ans += char2
      } else {
        console.log(k, 'char1 Matched', k)
        flag1 = true
        ans += char1
      }
    }


    if (char1 !== code && char2 !== code) {
      return false
    }

    // if (ans === s) return true
    console.log(k, 'i: ', i, 'j: ', j);
    flag1 ? i++ : j++
    console.log(k, 'i: ', i, 'j: ', j);

    if (k + 1 === s.length) {
      let p1End = p1[i]
      let p2End = p2[j]
      let next1End = p1[i+1]
      let next2End = p2[j+1]
      console.log('END p1End: ', p1End);
      console.log('END p2End: ', p2End);
      console.log('END next1End: ', next1End);
      console.log('END next2End: ', next2End);

      if (next1End || next2End || p1End || p2End) {
        console.log('next1 or next2 still exists')
        return false
      }
      return true

    }


  }


  return false;
}

// console.log('My Answer: ', isMerge('codewars', 'code', 'wars'))
// console.log('My Answer: ', isMerge('codewars', 'cdw', 'oears'))
// console.log('My Answer: ', isMerge('codewars', 'codes', 'wars'))
console.log('My Answer: ', isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'))

// s:  Bananas from Bahamas
// p1:  Bahas
// p2:  Bananas from am

// codewars
// p1:  codes
// p2:  wars

// Test.expect(isMerge('codewars', 'code', 'wars'));
// Test.expect(isMerge('codewars', 'cdw', 'oears'));
// Test.expect(!isMerge('codewars', 'cod', 'wars'));
