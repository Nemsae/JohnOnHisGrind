class Chapter {
  constructor() {
    this.text = ''
    this.numberOfWords = 0
    this.numberOfPunctuations = 0
  }

  addText (text) {
    this.text = text
  }

  printOut() {
    let chapterWords = this.text.split(' ')
    for (let i = 0; i < chapterWords.length; i++) {
      let chapterBlock = chapterWords[i]
      let wordCheck = isWord(chapterBlock)
      console.log('wordCheck: ', wordCheck);
      if (wordCheck[isWord]) {
        this.numberOfWords++
      } else {
        // } else if (wordCheck[isPunctuation]){
        // console.log('Punctuation: ', chapterBlock);
      }
    }

    console.log(`Number of words are ${this.numberOfWords}. Amount of punction(s): ${this.numberOfPunctuations}.`, chapter)
  }

  isWord(block) {
    let returnObj = {
      'isPunctuation': false,
      'isWord': false,
    }
    let charNumber = block.length

    let lastChar = block[charNumber - 1]
    let isLastCharPunctuation = lastChar.match(/[.,:!?]/)
    // let isFirstCharPunctuation = block[0].match(/[.,:!?]/)
    // console.log('isLastCharPunctuation: ', isLastCharPunctuation);
    if (isLastCharPunctuation) {
      if (charNumber === 1) {
        returnObj.isPunctuation = true
        this.numberOfPunctuations++
      } else {
      }
    } else {
      console.log('Sanity: !isLastCharPunctuation');
      returnObj.isWord = true
    }

    return returnObj
  }
}

let chapter1 = new Chapter()

chapter1.addText("Incredibly happy to be alive. Feelings of joy wrapping my heart tight, like a warm wilk ribbon touching its skin. (Listening to Pulse by IDER) I was sitting on the truck bed of my white 1991 Mistibushi pickup truck. I called for Qarrah, my favorite of playing the game of favorites, a black teenage cat who is the first generation of kittens. A crazy mother hopped onto the back of my dad’s pickup at church on Sunday, in ___ a town 30 minutes north east from here. She gave birth to five kittens, Qarrah, Earl, Stella, Elizabeth, and another -who I am forgetting, maybe its four - in the illegal side addition to our main house. No one lived there, but it provided the roof and comfort for Crazy mom to give birth.")
chapter1.printOut()
