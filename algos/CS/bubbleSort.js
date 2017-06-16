let arr1 = [9,4,1,2,5,6,10,13,12,3,7,8]

function bubble (array) {
  let lastElement = array.length - 1
  let isSorted = false

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < lastElement; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1)
        isSorted = false
      }
    }
    console.log('array: ', array);
    //  decrement lastElement
    lastElement--
  }


  function swap (arr, i, j) {
    let iEle = arr[i]
    let jEle = arr[j]
    let temp = iEle

    arr[i] = jEle
    arr[j] = temp
  }

  return array
}

console.log(bubble(arr1))
