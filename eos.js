

function calculateBenchmark(exchangeRate, myEther) {
  const myTokens = myEther/exchangeRate;
  const ethBenchmark = (2000000*myEther)/myTokens;

  return ethBenchmark;
}

function calculatePayout(exchangeRate, totalEth, tokens) {
  return exchangeRate * tokens;
}

//  Window #7
const exchangeRate_07_07_17 = .010500;
const myEther_07_07_17 = 6.74947130;
const calcTotalEth_07_07_17 = calculateBenchmark(exchangeRate_07_07_17, myEther_07_07_17);
console.log('calcTotalEth_07_07_17: ', calcTotalEth_07_07_17);
const actualTotalEth_07_07_17 = 19948.92;
//  potential payout
calculatePayout(exchangeRate_07_07_17, )
//  actual payout
calculatePayout(exchangeRate_07_07_17, )
