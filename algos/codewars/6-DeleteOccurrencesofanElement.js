function deleteNth(arr,x){
  // ...
  let dict = {}
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let num = arr[i]
    let record = dict[num]

    if (record && record < x) {
      dict[num]++
    } else if (record === undefined) {
      dict[num] = 1
    } else if (record && record === x) {
      arr.splice(i, 1)
      i--
      len--
    }
  }

  return arr
}
