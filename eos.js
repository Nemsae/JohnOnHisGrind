function calculateBenchmark(exchangeRate, myEther) {
  const myTokens = myEther/exchangeRate;
  console.log('myTokens:benchmark ', myTokens);
  const ethBenchmark = (2000000*myEther)/myTokens;

  return ethBenchmark;
}

function calculatePayout(exchangeRate, totalEth, myEther) {
  const myTokens = (2000000*myEther)/totalEth;
  console.log('myTokens: ', myTokens, 'exchangeRate: ', exchangeRate);
  const payout = myTokens * exchangeRate;

  return payout;
}

/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
/*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 *//*  Window #7 */
const exchangeRate_07_07_17 = .010500;
const myEther_07_07_17 = 6.74947130;
const actualTotalEth_07_07_17 = 19948.92;

//  Calculating the limit for total eth contributed
const maxLimitEth_07_07_17 = calculateBenchmark(exchangeRate_07_07_17, myEther_07_07_17);
console.log('maxLimitEth_07_07_17: ', maxLimitEth_07_07_17);

//  Actual payout
const actualPayout_07_07_17 = calculatePayout(exchangeRate_07_07_17, actualTotalEth_07_07_17, myEther_07_07_17);
console.log('actualPayout_07_07_17: ', actualPayout_07_07_17);

const ethProfit_07_07_17 = actualPayout_07_07_17 - myEther_07_07_17;
console.log('ethProfit_07_07_17: ', ethProfit_07_07_17);
