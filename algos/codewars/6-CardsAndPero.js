// For s = "P01K02H03H04", the output should be [12, 12, 11, 13].
//
// 1 card from "P" suit, 1 card from "K" suit, 2 cards from "H" suit, no card from "T" suit.
//
// For s = "H02H10P11H02", the output should be [-1, -1, -1, -1].
//
// There are two same cards "H02" in the string s.

function cardsAndPero(s) {
  //coding and coding..
  let dups = {}
  let count = {
    'P': [],
    'K': [],
    'H': [],
    'T': []
  }

  let dupsAns = [-1, -1, -1, -1]

  // console.log('count: ', count);
  for (let i = 0; i < s.length; i = i + 3) {
    let card = s[i] + s[i+1] + s[i+2]
    let cardSuit = s[i]
    let cardNum = s[i+1] + s[i+2]

    //  Check if card is duplicate
    if (dups[card]) return dupsAns
    else dups[card] = 1

    count[cardSuit].push(cardNum)
  }

  let keys = Object.keys(count)
  let ans = []

  keys.forEach(key => {
    let suitCount = count[key].length
    let suitRemaining = 13 - suitCount

    ans.push(suitRemaining)
  })

  return ans
}

console.log(cardsAndPero("P01K02H03H04")) //  [12, 12, 11, 13]
console.log(cardsAndPero("H02H10P11H02")) //  -1, -1, -1]
console.log(cardsAndPero("P10K10H10T01")) //  [12, 12, 12, 12]
console.log(cardsAndPero("P05P01P02P03P13P09P11P07K01P12K03K02K13K12K10K08H03H02H13H12H10H08T01T03T02T13T12T10T08P04K07H02T07H06T11K11T05K05H05H11")) //  [12, 12, 12, 12]

// Test.assertDeepEquals(cardsAndPero("P01K02H03H04"),[12, 12, 11, 13])
// Test.assertDeepEquals(cardsAndPero("H02H10P11H02"),[-1, -1, -1, -1])
// Test.assertDeepEquals(cardsAndPero("P10K10H10T01"),[12, 12, 12, 12])
// Test.assertDeepEquals(cardsAndPero("P05P01P02P03P13P09P11P07K01P12K03K02K13K12K10K08H03H02H13H12H10H08T01T03T02T13T12T10T08P04K07H02T07H06T11K11T05K05H05H11"),[-1, -1, -1, -1])
// Test.assertDeepEquals(cardsAndPero("P01K02P03P11K09K10P13P10"),[8, 10, 13, 13])
