//  Input:  0 < n < 1
//  Output: Binary of n, max = 32 bits

function decFloatToBin(n) {
    let count = 0,
        float = n,
        floatBin = '.'

    if (float === 0) return 0
    if (float === 1) return 10

    while (float !== 0 && count <= 32) {
      // console.log('float: ', float);
      float *= 2
      let whl = checkWhole(float)
      if (whl === '1') float = float - 1
      // console.log('whl: ', whl);
      floatBin += whl
      count++
    }

    return count > 32 ? 'ERROR' : floatBin
}

function checkWhole(num) {
  let whole = (num + '').split('.')
  return whole[0]
}


console.log(decFloatToBin(.625))
console.log(decFloatToBin(.72))
