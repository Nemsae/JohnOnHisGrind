// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}

    nums.forEach(num => {
        if (map[num]) {
            map[num] = map[num] + 1
        } else {
            map[num] = 1
        }
    })

    let keys = Object.keys(map)

    let max = 0
    let ans

    keys.forEach(key => {
        if (map[key] > max) {
            max = map[key]
            ans = key
        }
    })

    return Number(ans)
};

// Percentile: 62.99%
// Runtime: 108 ms
