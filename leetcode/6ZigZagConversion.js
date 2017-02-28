//  Pattern for this problem: Check for the indexes of climbing stairs

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length === 0 || numRows === 1) {
        return s
    }

    let arr = s.split('')

    let n = numRows
    let count = 1;
    let ans = []

    while (n) {
        ans.push()
        count++
        n--
    }



    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]

        if (i%2 === 1) {
            console.log('2nd Row', letter)
        } else if (i%4 === 0) {
            console.log('1st Row', letter)
        } else if ((i - 2)%4 === 0) {
            console.log('3rd Row', letter)
        }
    }

};
