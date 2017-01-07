// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

function order(words){
  // ...

  let dict = {}

  words.split(' ').forEach(word => {
    let place

    word.split('').forEach(letter => {
      if (Number(letter)) place = letter
    })

    dict[place] = word
    console.log('place: ', place);
    console.log('dict: ', dict);
  })
  let ans = []

  Object.keys(dict).forEach(key => {
    ans.push(dict[key])
  })
  // for (let x in dict) {
  //   ans.push(x)
  // }
  return ans.join(' ')

  //Find the place
  //put into dict like 'place':word
  //iterate through dict to make the sentence.
}

console.log(order('is2 Thi1s T4est 3a'))

// Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// Test.assertEquals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// Test.assertEquals(order(""), "")
