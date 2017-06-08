module.exports = class Chapter {
  constructor(chapterTitle, chapterText) {
    if (chapterTitle && typeof chapterTitle !== 'string') {
      console.log('Contract Violation: please instantiate Chapter title property with a string.')
      return null
    }
    if (chapterText && typeof chapterText !== 'string') {
      console.log('Contract Violation: please instantiate Chapter text property with a string.')
      return null
    }
    if (chapterText && chapterText.length !== 0) {
      this.text = chapterText
      this.wordCount()
    }

    this.title = chapterTitle ? chapterTitle : ''
    this.text = chapterText ? chapterText : ''
    this.numberOfWords = 0
    this.numberOfPunctuations = 0
  }

  modifyTitle(newTitle) {
    this.title = newTitle
  }

  addText (text) {
    this.text = text
  }

  wordCount() {
    let chapterWords = this.text.split(' ')
    for (let i = 0; i < chapterWords.length; i++) {
      let chapterBlock = chapterWords[i]
      let wordCheck = this.isWord(chapterBlock)
      // console.log('wordCheck: ', wordCheck);
      if (wordCheck.isWord && wordCheck.isPunctuation) {
        //  the "end."
        this.numberOfWords++
        this.numberOfPunctuations++
        console.log('Block is a word and punctuation: ', chapterBlock)
      } else if (wordCheck.isWord) {
        this.numberOfWords++
        console.log(('Block is a word', chapterBlock))
      } else if (wordCheck.isPunctuation){
        this.numberOfPunctuations++
        console.log(('Block is a word', chapterBlock))
      }
    }

    console.log(`Number of words are ${this.numberOfWords}. Amount of punction(s): ${this.numberOfPunctuations}.\n`, this.text)
  }

  isWord(block) {
    let returnObj = {
      'isPunctuation': false,
      'isWord': false,
    }

    // let lastChar = block[charNumber - 1]
    let blockPunctuationMatch = block.match(/[.,:!?]/)
    console.log('blockPunctuationMatch: ', blockPunctuationMatch);
    if (blockPunctuationMatch) {
      if (blockPunctuationMatch.index === 0) {
        returnObj.isPunctuation = true
      } else if (blockPunctuationMatch.index > 0) {
        //  what if '...'
        returnObj.isPunctuation = true
        returnObj.isWord = true
      }
    } else {
      returnObj.isWord = true
    }

    return returnObj
  }
}



// let chapter1 = new Chapter('Chapter One')
//
// chapter1.addText("Incredibly happy to be alive. Feelings of joy wrapping my heart tight, like a warm wilk ribbon touching its skin. (Listening to Pulse by IDER) I was sitting on the truck bed of my white 1991 Mistibushi pickup truck. I called for Qarrah, my favorite of playing the game of favorites, a black teenage cat who is the first generation of kittens. A crazy mother hopped onto the back of my dad’s pickup at church on Sunday, in ___ a town 30 minutes north east from here. She gave birth to five kittens, Qarrah, Earl, Stella, Elizabeth, and another - who I am forgetting, maybe its four - in the illegal side addition to our main house. No one lived there, but it provided the roof and comfort for Crazy mom to give birth.")
// chapter1.wordCount()
