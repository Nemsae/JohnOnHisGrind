let arr1 = [9,4,1,2,5,6,10,13,12,3,7,8]

function mergeSort(arr) {
  halve(arr)

  function halve(array) {
    if (array.length <= 1) {
      return array
    }

    //  left half
    let middle = Math.floor((array.length)/2),
        leftArray = array.slice(0, middle),
        rightArray = array.slice(middle)

    console.log('middle: ', middle, 'leftArray: ', leftArray ,  'rightArray: ', rightArray );
    return mergeHalves(halve(leftArray), halve(rightArray))
  }

  function mergeHalves(leftArr, rightArr) {
    console.log('leftArr: ', leftArr,  'rightArr: ', rightArr );
    let leftLen = leftArr.length,
        left = 0,
        rightLen = rightArr.length,
        right = 0,
        result = []

    while (left < leftLen && right < rightLen) {
      if (leftArr[left] < rightArr[right]) {
        result.push(leftArr[left])
        left++
      } else {
        result.push(rightArr[right])
        right++
      }
    }
    // console.log('result: ', result,  'left: ', left,  'right: ', right  );

    let x = result.concat(leftArr.slice(left)).concat(rightArr.slice(right))
    console.log('x: ', x);
    return x
  }
}

console.log(mergeSort(arr1))
