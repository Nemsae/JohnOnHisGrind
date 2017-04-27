class minHeap {
  constructor(value) {
    if (value) {
      this.items = [value]
      this.size = 1
    } else {
      this.items = []
      this.size = 0
    }
  }

  //  returns boolean if right child exists
  hasRightChild(index) {
    //  check if ele exists at index
    return this.items[this.getRightChildIndex(index)] !== undefined ? true : false
  }
  //  returns boolean if left child exists
  hasLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)] !== undefined ? true : false
  }
  //  returns boolean if parent element exists
  hasParent(index) {
    return this.items[this.getParentIndex(index)] !== undefined ? true : false
  }

  //  returns index of rightChild
  getRightChildIndex(index) {
    return (index * 2) + 2
  }
  //  returns index of leftChild
  getLeftChildIndex(index) {
    return (index * 2) + 1
  }
  //  returns index of parent
  getParentIndex(index) {
    return Math.abs(Math.ceil((index - 2) / 2))
  }

  //  peek at the min element
  peek() {
    if (this.size === 0) return 'No min element, heap is empty!'

    return item[0]
  }

  //  add an element
  add(value) {
    if (this.size === 0) {
      this.items[0] = value
      this.size++
    } else {

      this.items[this.size] = value
      this.size++

      console.log('this.items: ', this.items);

      // Element is added, now bubble up
      this.heapifyUp()
    }

  }

  //  remove the min element/root
  remove() {
    if (this.size === 0) return 'No min element, heap is empty!'
    let min = this.items[0]
    let last = this.items[this.size - 1]

    this.items[0] = last
    this.size--

    this.heapifyDown()

    return min
  }

  //  swaps elements at given indices
  swap(index1, index2) {
    let tempItem = this.items[index1]
    this.items[index1] = this.items[index2]
    this.items[index2] = tempItem
  }

  //  No need for ind as an argument since we will always heapifyUp from last element added
  heapifyUp() {
    let ind = this.size - 1
    let parentInd = this.getParentIndex(ind)
    let parentEle = this.items[parentInd]

    while(this.hasParent(ind) && parentEle > this.items[ind]) {
      this.swap(parentInd, this.items[ind])
      ind = parentInd
    }
  }

  heapifyDown() {
    let ind = 0
    let ele = this.items[ind]
    let swapInd

    while(hasLeftChild(ind)) {
      let smallerChild = this.items[this.getLeftChildIndex[ind]]
      swapInd = this.getLeftChildIndex[ind]

      if (smallerChild > this.items[this.getRightChildIndex[ind]]) {
        smallerChild = this.items[this.getRightChildIndex[ind]]
        swapInd = this.getRightChildIndex[ind]
      }

      if (ele < smallerChild) break

      this.swap(ind, swapInd)

      ind = swapInd
    }
  }
}

let myMinHeap = new minHeap
console.log('myMinHeap: ', myMinHeap);
myMinHeap.add(10)
console.log('10 myMinHeap: ', myMinHeap);
myMinHeap.add(15)
console.log('15 myMinHeap: ', myMinHeap);
myMinHeap.add(20)
console.log('20 myMinHeap: ', myMinHeap);
myMinHeap.add(17)
console.log('17 myMinHeap: ', myMinHeap);

// myMinHeap.add(8)
// console.log('8 myMinHeap: ', myMinHeap);
