/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let ans = 0

    for (let i = s.length - 1; i >=0; i--) {
        let letter = s[i]
        let prevLetter = s[i+1]

        if (dict[letter] < dict[prevLetter]) {
            ans -= dict[letter]
        } else {
            ans += dict[letter]
        }
    }
    return ans
};
