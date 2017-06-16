class oneQueueTwoStacks {
  constructor () {
    this.newestData = []
    this.oldestData = []
    this.newLen = 0
    this.oldLen = 0
  }

  swapStacks () {
    let fromStack,
        toStack
    console.log('this.newLen: ', this.newLen, 'this.oldLen: ', this.oldLen );
    if (!this.newLen && !this.oldLen) {
      return
    } if (this.newLen > this.oldLen) {
      fromStack = this.newestData
      toStack = this.oldestData
      this.oldLen = this.newLen
      this.newLen = 0
    } else {
      fromStack = this.oldestData
      toStack = this.newestData
      this.newLen = this.oldLen
      this.oldLen = 0
    }

    // console.log(0, 'fromStack: ', fromStack, 'toStack: ', toStack );
    let runs = fromStack.length
    for (let i = 0; i < runs; i = 0, runs--) {
      toStack.push(fromStack.pop())
    }
    // console.log(1, 'fromStack: ', fromStack, 'toStack: ', toStack );
    console.log('this.newestData: ', this.newestData, 'this.oldestData: ', this.oldestData, 'this.oldLen: ', this.oldLen , 'this.newLen: ', this.newLen  );
  }

  enqueue (ele) {
    if (!this.newLen) {
      this.swapStacks()
    }

    this.newestData.push(ele)
    this.newLen++
    console.log('this.newestData: ', this.newestData, 'this.oldestData: ', this.oldestData);
  }

  peek () {
    if (!this.oldLen) {
      console.log('Sanity:Swapping? ');
      this.swapStacks()
    }

    return this.oldestData[this.oldLen - 1]
  }

  dequeue () {
    if (!this.oldLen) {
      this.swapStacks()
    }

    console.log('this.newestData: ', this.newestData, 'this.oldestData: ', this.oldestData );
    this.oldLen--
    return this.oldestData.pop()
  }
}

let myQueue = new oneQueueTwoStacks()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log('peek: ', myQueue.peek())
console.log('dequeue: ', myQueue.dequeue())
console.log('peek: ', myQueue.peek())
console.log('dequeue: ', myQueue.dequeue())
console.log('peek: ', myQueue.peek())
myQueue.enqueue(4)
myQueue.enqueue(5)
console.log('peek: ', myQueue.peek())
