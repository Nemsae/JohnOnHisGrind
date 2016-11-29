// For s = "P01K02H03H04", the output should be [12, 12, 11, 13].
//
// 1 card from "P" suit, 1 card from "K" suit, 2 cards from "H" suit, no card from "T" suit.
//
// For s = "H02H10P11H02", the output should be [-1, -1, -1, -1].
//
// There are two same cards "H02" in the string s.



console.log(cardsAndPero("P01K02H03H04")) //  [12, 12, 11, 13]
console.log(cardsAndPero("H02H10P11H02")) //  -1, -1, -1]
console.log(cardsAndPero("P10K10H10T01")) //  [12, 12, 12, 12]

// Test.assertDeepEquals(cardsAndPero("P01K02H03H04"),[12, 12, 11, 13])
// Test.assertDeepEquals(cardsAndPero("H02H10P11H02"),[-1, -1, -1, -1])
// Test.assertDeepEquals(cardsAndPero("P10K10H10T01"),[12, 12, 12, 12])
// Test.assertDeepEquals(cardsAndPero("P05P01P02P03P13P09P11P07K01P12K03K02K13K12K10K08H03H02H13H12H10H08T01T03T02T13T12T10T08P04K07H02T07H06T11K11T05K05H05H11"),[-1, -1, -1, -1])
// Test.assertDeepEquals(cardsAndPero("P01K02P03P11K09K10P13P10"),[8, 10, 13, 13])
