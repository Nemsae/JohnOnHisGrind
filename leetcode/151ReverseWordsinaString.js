// Given an input string, reverse the string word by word.
//
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let arr = str.trim().split(' ')
    let ans = []

    for (let i = arr.length-1; i>=0; i--) {
        let ele = arr[i]
        if (ele.length !== 0) {
            ans.push(ele)
        }

    }

    return ans.join(' ')
};
