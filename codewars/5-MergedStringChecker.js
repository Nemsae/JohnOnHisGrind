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

    console.log('code: ', code);
    console.log('char1: ', char1);
    console.log('char2: ', char2);

    //  If Neither of the next letters do not match the next code, return false
    // if (next1 !== nextCode && next2 !== nextCode) {
    //   console.log('Next Letters do not match nextCode')
    //   return false
    // }

    if (char1 === code) {
      console.log('char1 Matches')

      i++
      ans += char1
    } else if (char2 === code)  {
      console.log('char2 Matches', k)

      j++
      ans += char2
    }

    if (char1 !== code && char2 !== code) {
      return false
    }
    if (ans === s) return true
    // if (k + 1 === s.length) {
    //   if (next1 !== undefined || next2 !== undefined) return false
    //   return true
    //
    // }
  }


  return false;
}

// console.log('My Answer: ', isMerge('codewars', 'code', 'wars'))
console.log('My Answer: ', isMerge('codewars', 'cdw', 'oears'))

// Test.expect(isMerge('codewars', 'code', 'wars'));
// Test.expect(isMerge('codewars', 'cdw', 'oears'));
// Test.expect(!isMerge('codewars', 'cod', 'wars'));
