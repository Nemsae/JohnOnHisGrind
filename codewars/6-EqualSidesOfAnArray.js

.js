// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//
// For example:
//
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
//
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

function findEvenIndex(arr)
{
  let sum = arr.reduce((a, b) => {
    return a + b
  }, 0)

  let leftSum = 0
  let rightSum = sum

  for (let i = 0; i < arr.length; i++) {
    console.log('BEFORE:leftSum: ', leftSum, 'rightSum: ', rightSum)
    let num = arr[i]
    let next = arr[i+1]

    if (leftSum === (rightSum - num)) return i

    rightSum -= num
    leftSum += num

    console.log('AFTER:leftSum: ', leftSum, 'rightSum: ', rightSum, 'num: ', num)
  }

//   console.log('sum: ', sum)
  return -1

  //Code goes here!
}

console.log(findEvenIndex([1,100,50,-51,1,1]))

// Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
// Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
// Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
// Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
