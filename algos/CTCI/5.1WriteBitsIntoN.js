// Input: two 32-bit numbers m and n, i and j
// Output: n

// Write a method to insert M into N such that M starts at bit j and ends at bit i.

function writeMintoN(m, n, i, j) {
  let mLen = (m + '').length,
      aMax = j - mLen,
      mInd = 0

  for (let a = j; a > aMax; a--) {
    clearBit(n, a)
    let newBit = getBit(m + '', mInd)
    mInd++
    let updatedN = updateBit(n, a, newBit)
    n = updatedN.toString(2)
    console.log('n: ', n);
  }

  return n
}

function clearBit(n, a) {
  let mask = ~(1 << a)
  n = n & mask
}

function getBit(mString, mInd) {
  return Number(mString[mInd])
}

function updateBit(n, a, newBit) {
  console.log('newBit mask: ', (newBit << a).toString(2))

  return n = parseInt(n, 2) | (newBit << a)
  // console.log('n:updateBit ', n.toString(2));
}


let n = 100000000000,
    m = 10011,
    i = 2,
    j = 6

console.log(writeMintoN(m, n, i, j))
