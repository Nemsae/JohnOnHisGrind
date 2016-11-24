// Instructions
// Output
// Past Solutions
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(str){
  //TODO Have fun :)
  console.log('str: ', str)

  let arr = str.split('')
  arr.forEach(word => {
    if (word.length > 4) {
      let letters = word.split('')
      console.log('letters: ', letters);
    }
  })
}

let string = Hey fellow warriors
//  Hey wollef sroirraw

console.log(spinWords(string))
