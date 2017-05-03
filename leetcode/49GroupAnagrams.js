// Given an array of strings, group anagrams together.
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ans = []
  let dict = {}

  let group = []

  for (let i = 0; i < strs.length; i++) {
    let cur = strs[i]
    cur.forEach(char => dict[char] ? dict[char]++ : dict[char] = 1)
    group.push(cur)

    for (let j = i + 1; j < strs.length; j++) {
      let next = strs[j]

      next.forEach(char => {
        if (dict[char]) {
          dict[char]--
        } else {
          return;
        }
      })

      let keys = Object.keys(dict)
      let sum = keys.reduce((c, i, a) => c + i, 0)

      if (sum === 0) {
        strs.splice(j, 1)
        strs.length--
        group.push(next)
      }
    }

    ans.push(group)
    dict = {}
  }

  return ans
};
