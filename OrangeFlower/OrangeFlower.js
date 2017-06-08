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

    //  If class is instantiated with text, call wordCount.
    if (chapterText && chapterText.length !== 0) {
      this.title = chapterTitle ? chapterTitle : ''
      this.text = chapterText ? chapterText : ''
      this.numberOfWords = 0
      this.numberOfPunctuations = 0

      this.wordCount()
    } else {
      this.title = chapterTitle ? chapterTitle : ''
      this.text = chapterText ? chapterText : ''
      this.numberOfWords = 0
      this.numberOfPunctuations = 0
    }

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

      if (wordCheck.isWord && wordCheck.isPunctuation) {
        //  the "end."
        this.numberOfWords++
        this.numberOfPunctuations++
        // console.log('Block is a word and punctuation: ', chapterBlock)
      } else if (wordCheck.isWord) {
        this.numberOfWords++
        // console.log('Block is a word: ', chapterBlock)
      } else if (wordCheck.isPunctuation){
        this.numberOfPunctuations++
        // console.log('Block is a punctuation: ', chapterBlock)
      }
    }

    // console.log(`Number of words are ${this.numberOfWords}. Amount of punction(s): ${this.numberOfPunctuations}.`)
  }

  viewText() {
    //  TODO: CSS for console.log text in Chrome.
    // console.log("%cBlue! \n%cGreen", "color: blue; font-size:15px; text-align:center", "color: green; font-size:12px;");
    console.log(`${this.title}`, `\n\nNumber of words are ${this.numberOfWords}. Amount of punction(s): ${this.numberOfPunctuations}.\n\n\t`, this.text)
  }

  isWord(block) {
    let returnObj = {
      'isPunctuation': false,
      'isWord': false,
    }

    let blockPunctuationMatch = block.match(/[.,:!?-]/)
    if (blockPunctuationMatch) {
      if (blockPunctuationMatch.index === 0) {
        returnObj.isPunctuation = true
      } else if (blockPunctuationMatch.index > 0) {
        // TODO:CASE what if '...'
        returnObj.isPunctuation = true
        returnObj.isWord = true
      }
    } else {
      returnObj.isWord = true
    }

    return returnObj
  }

  newEntry(newText) {
    let timeStamp = Date.now()

    this.text = `${this.text}\n\n${timeStamp}\n\t${newText}`
  }
}
