// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let max = 0
   let curMax = 0
   let dict = {}
   let restartInd = 0
   let strArr = s.split('')

   for (let i = 0; i < strArr.length; i++) {
     let char = strArr[i]
     if (dict[char] > -1 && dict[char] >= restartInd) {
       restartInd = dict[char]
       curMax = i - restartInd
       dict[char] = i
     } else {
       curMax++
       dict[char] = i
     }
     if (curMax > max) {
       max = curMax
     }
   }
   return max
 };


console.log(lengthOfLongestSubstring('abcabcbb'))  //  3
console.log(lengthOfLongestSubstring('bbbbb')) //  1
console.log(lengthOfLongestSubstring('pwwkew'))  //  3
console.log(lengthOfLongestSubstring('dvdf'))  //  3
console.log(lengthOfLongestSubstring('abba')) //  2
