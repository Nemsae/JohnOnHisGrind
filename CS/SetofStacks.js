class setOfStacks {
  constructor (limit) {
    this.stackLimit = limit
    this.data = []
    this.innerInd = 0
    this.stackInd = 0
    this.stackCount = 0
  }

  push (val) {
    //  innerInd is incremeneted for index of next PUSH
    if (this.stackCount === 0) {
      this.data.splice(this.stackInd, 0, [val])
      this.stackCount++
      this.innerInd++
    } else if (this.stackCount % this.stackLimit === 0) {
      this.stackInd++
      this.innerInd = 1
      this.data.splice(this.stackInd, 0, [val])
      this.stackCount++
    } else {
      this.data[this.stackInd].splice(this.innerInd, 0, val)
      this.innerInd++
      this.stackCount++
    }
  }

  pop () {
    if (this.stackCount === 0) {
      return undefined
    }

    let popped = this.data[this.stackInd][this.innerInd - 1]
    this.data[this.stackInd].splice(this.innerInd - 1, 1)

    if (this.innerInd - 1 === 0) {
      this.innerInd = this.stackLimit
      this.data.splice(this.stackInd, 1)
      this.stackInd = this.stackInd === 0 ? 0 : this.stackInd - 1
      this.stackCount--
    } else {
      this.innerInd--
      this.stackCount--
    }
    return popped
  }

  peek () {
    if (this.stackCount === 0) {
      return undefined
    }

    return this.data[this.stackInd][this.innerInd - 1]
  }
}

let mySetOfStacks = new setOfStacks(3)
mySetOfStacks.push(1)
mySetOfStacks.push(2)
mySetOfStacks.push(3)
console.log('peek:3 ', mySetOfStacks.peek())
mySetOfStacks.push(4)
mySetOfStacks.push(5)
mySetOfStacks.push(6)
console.log('peek:6 ', mySetOfStacks.peek())
mySetOfStacks.push(7)
mySetOfStacks.push(8)
console.log('peek:8 ', mySetOfStacks.peek())
mySetOfStacks.push(9)
console.log('peek:9 ', mySetOfStacks.peek())
mySetOfStacks.push(10)
mySetOfStacks.push(12)
mySetOfStacks.push(13)
console.log(mySetOfStacks.push(14))
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('pop: ', mySetOfStacks.pop())
console.log('push: ', mySetOfStacks.push(4))
console.log('push: ', mySetOfStacks.push(5))
console.log('peek:5 ', mySetOfStacks.peek())
