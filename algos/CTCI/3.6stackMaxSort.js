class stackMaxSort {
  constructor () {
    this.stack = []
    this.buffer = []
    this.stackLen = 0
    this.bufferLen = 0
  }

  push (val) {
    if (this.stackLen === 0 || val > this.peek()) {
      // console.log(val, 'val is more', this.peek());
      this.stack.push(val)
      this.stackLen++
      // console.log('this.stack: ', this.stack);
      return this.stackLen
    }

    if (val < this.peek()) {
      // console.log(val, 'val is less', this.peek());
      // use buffer
      while (val < this.peek()) {
        this.buffer.push(this.stack.pop())
        this.stackLen--
        this.bufferLen++
      }
      // console.log('BEFORE this.stack: ', this.stack, 'this.buffer: ', this.buffer );
      this.stack.push(val)
      this.stackLen++

      while (this.bufferLen) {
        this.stack.push(this.buffer.pop())
        this.bufferLen--
        this.stackLen++
      }
      // console.log('AFTER this.stack: ', this.stack, 'this.buffer: ', this.buffer );
      // console.log(val, 'this.stack: ', this.stack);

      return this.stackLen
    }

    // if (val < this.peek()) {
    //   this.stack.push(val)
    //   this.stackLen++
    //   return this.stackLen
    // }
  }

  peek () {
    // console.log(this.stack, 'this.stackLen: ', this.stackLen);
    if (this.stackLen === 0) {
      return undefined
    }

    return this.stack[this.stackLen - 1]
  }

  pop () {
    if (this.stackLen === 0) {
      return undefined
    }

    // let popped = this.stack[this.stackLen - 1]
    this.stackLen--
    return this.stack.pop()
  }

  bufferIsEmpty () {
    return this.buffer.length === 0
  }

  isEmpty () {
    return this.stack.length === 0
  }
}

let myMaxStack = new stackMaxSort()
console.log(myMaxStack.isEmpty())
console.log(5, 'push: ', myMaxStack.push(5))
console.log(1, 'push: ', myMaxStack.push(1))
console.log(3, 'push: ', myMaxStack.push(3))
console.log(9, 'push: ', myMaxStack.push(9))
console.log(7, 'push: ', myMaxStack.push(7))
console.log(10, 'push: ', myMaxStack.push(10))
console.log(2, 'push: ', myMaxStack.push(2))
console.log('peek: ', myMaxStack.peek())
console.log('myMaxStack: ', myMaxStack);
console.log(myMaxStack.isEmpty())
