class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    if (this.stack.length === 0) {
      this.minStack.push(val)
      this.stack.push(val)
    } else {
      this.stack.push(val)
      if (val <= this.min()) {
        this.minStack.push(val)
      }
    }
  }

  pop() {
    let stackLen = this.stack.length
    if (stackLen === 0) return undefined

    if (this.stack[stackLen - 1] === this.min()) {
      this.minStack.pop()
      return this.stack.pop()
    }

    return this.stack.pop()
  }

  min() {
    return this.minStack[this.minStack.length - 1]
  }
}

let myMinStack = new MinStack()
console.log('myMinStack: ', myMinStack);
console.log('push: ', myMinStack.push(0))
console.log('push: ', myMinStack.push(1))
console.log('push: ', myMinStack.push(0))
console.log(myMinStack)
console.log('min: ', myMinStack.min())
console.log(myMinStack)
console.log('pop: ', myMinStack.pop())
console.log(myMinStack)
console.log('min: ', myMinStack.min())
console.log(myMinStack)
