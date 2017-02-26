/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //  Goal is to merge both arrays, then find median of that merged array by looking at its length
    let mergedArray = [];

    if (nums1.length === 0) {
        mergedArray = nums2
    } else if (nums2.length === 0) {
        mergedArray = nums1
    } else {
        //  Look at first number of both arrays
        let firstNum1 = nums1[0]
        let firstNum2 = nums2[0]
        let initArray = [firstNum1, firstNum2]

        //  Find out which array is first and second
        let firstArray
        let secondArray
        let init = Math.max(...initArray)
        let initIndex = initArray.indexOf(init)

        initIndex ? firstArray = nums1 : firstArray = nums2
        initIndex ? secondArray = nums2 : secondArray = nums1

        //  CONSOLE INFO
        // console.log('firstNum1: ', firstNum1, 'firstNum2: ', firstNum2, 'initIndex: ', initIndex, 'firstArray is: ', firstArray, 'secondArray is: ', secondArray)

        //  While mergedArray length is not the sum of both lengths
        let firstCount = 0
        let secondCount = 0
        let firstMax = firstArray.length
        let secondMax = secondArray.length

        while (mergedArray.length < nums1.length + nums2.length) {
            //  First iteration we know that first number in merged will be firstArray[0]
            if (firstCount === 0) {
                mergedArray.push(firstArray[firstCount])
                firstCount++
            } else {
                //  if next element of first count is less than second
                if (firstArray[firstCount] === secondArray[secondCount]) {
                    mergedArray.push(firstArray[firstCount])
                    mergedArray.push(secondArray[secondCount])
                    firstCount++
                    secondCount++
                    //  Use this console for checking the recent merge and counts
                    // console.log('mergedArray2: ', mergedArray, 'firstCount: ', firstCount, 'secondCount: ', secondCount)
                } else if (firstArray[firstCount] < secondArray[secondCount]) {
                    mergedArray.push(firstArray[firstCount])
                    firstCount++
                } else if (firstArray[firstCount] > secondArray[secondCount]) {
                    mergedArray.push(secondArray[secondCount])
                    secondCount++
                } else if (secondCount + 1 > secondMax) {
                    mergedArray.push(firstArray[firstCount])
                    firstCount++
                } else if (firstCount + 1 > firstMax) {
                    mergedArray.push(secondArray[secondCount])
                    secondCount++
                }
            }
        }
    }

    let l = mergedArray.length

    // if (l % 2 === 1) {
    //     let ans = mergedArray[Math.floor(l/2)]
    //     return ans
    // } else {
    //     let ans = (mergedArray[Math.floor(l/2)-1] + mergedArray[Math.floor(l/2)]) / 2
    //     return ans
    // }
};

// TC#1
nums1 = [1,3]
nums2 = [2]

findMedianSortedArrays(nums1, nums2)
