function printOut(chapter) {
  let chapterWords =  chapter.split(' ')
  let numberOfWords = 0
  let numberOfPunctuations = 0
  for (let i = 0; i < chapterWords.length; i++) {
    let chapterBlock = chapterWords[i]
    let wordCheck = isWord(chapterBlock)
    console.log('wordCheck: ', wordCheck);
    if (wordCheck[isWord]) {
      numberOfWords++
    } else if (wordCheck[isPunctuation]){
      console.log('Punctuation: ', chapterBlock);
    }
  }

  console.log(`Number of words are ${numberOfWords}. Amount of punction(s): ${numberOfPunctuations}.`, chapter)
}

function isWord(block) {
  let returnObj = {
    'isPunctuation': false,
    'isWord': false,
  }

  let lastChar = block[block.length - 1]
  let isLastCharPunctuation = lastChar.match(/[.,:!?]/)
  // let isFirstCharPunctuation = block[0].match(/[.,:!?]/)
  // console.log('isLastCharPunctuation: ', isLastCharPunctuation);
  if (isLastCharPunctuation) {
    if (lastChar === block[0]) {
      returnObj.isPunctuation = true
      numberOfPunctuations++
    }
  } else {
    console.log('Sanity:');
    returnObj[isWord] = true
  }

  return returnObj
}

let chapter1 = "Incredibly happy to be alive. Feelings of joy wrapping my heart tight, like a warm wilk ribbon touching its skin. (Listening to Pulse by IDER) I was sitting on the truck bed of my white 1991 Mistibushi pickup truck. I called for Qarrah, my favorite of playing the game of favorites, a black teenage cat who is the first generation of kittens. A crazy mother hopped onto the back of my dad’s pickup at church on Sunday, in ___ a town 30 minutes north east from here. She gave birth to five kittens, Qarrah, Earl, Stella, Elizabeth, and another -who I am forgetting, maybe its four - in the illegal side addition to our main house. No one lived there, but it provided the roof and comfort for Crazy mom to give birth."
printOut(chapter1)
