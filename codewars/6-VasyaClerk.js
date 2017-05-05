function longestConsec(strarr, k) {
    // your code
    let max = 0
//     let maxStr = ''
//     let limit = k

    for (let i = 0; i < strarr.length; i++) {
      let currLen = strarr[i].length
      let currTotal = currLen

      for (let j = 0; j < k; j++) {
        let nextLen = strarr[j].length
        currTotal += nextLen
      }

      if (currTotal > max) {
        max = currTotal
      }
    }

    return max;
}
