// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
  let dict = {}

  str2.split('').forEach(l => dict[l] ? dict[l]++ : dict[l] = 1)

  str1.split('').forEach(l => dict[l] ? dict[l]-- : 1)

  let keys = Object.keys(dict)
  let sum = keys.reduce((c, i, a) => c + dict[i], 0)

  return sum === 0 ? true : false
}

console.log(scramble('rkqodlw','world'))
console.log(scramble('cedewaraaossoqqyt','codewars'))
console.log(scramble('katas','steak'))
console.log(scramble('scriptjava','javascript'))
console.log(scramble('scriptingjava','javascript'))
console.log(scramble('scriptsjava','javascripts'))
console.log(scramble('jscripts','javascript'))
console.log(scramble('aabbcamaomsccdd','commas'))

// describe('Intial Tests', function(){
//   Test.assertEquals(scramble('rkqodlw','world'),true);
//   Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
//   Test.assertEquals(scramble('katas','steak'),false);
//   Test.assertEquals(scramble('scriptjava','javascript'),true);
//   Test.assertEquals(scramble('scriptingjava','javascript'),true);
//   Test.assertEquals(scramble('scriptsjava','javascripts'),true);
//   Test.assertEquals(scramble('jscripts','javascript'),false);
//   Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
// });
