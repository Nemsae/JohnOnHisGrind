/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans

    nums.some((num, i) =>  {
      let pair = target - num
      let pairIndex

      if (nums.indexOf(pair) > -1 && nums.lastIndexOf(pair) != nums.indexOf(num)) {
          let pairIndex = nums.lastIndexOf(pair)
          ans = [i, pairIndex]

          return true
      }
    })

    return ans;
};
