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
    return items[getRightChildIndex(index)] !== undefined ? true : false
  }
  //  returns boolean if left child exists
  hasLeftChild(index) {
    return items[getLeftChildIndex(index)] !== undefined ? true : false
  }
  //  returns boolean if parent element exists
  hasParent(index) {
    return items[getParentIndex(index)] !== undefined ? true : false
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
      items[0] = value
      this.size++
    }

    items[size] = value
    this.size++

    // Element is added, now bubble up
    heapifyUp()
  }

  //  remove the min element/root
  remove() {
    if (this.size === 0) return 'No min element, heap is empty!'
    let min = items[0]
    let last = items[size - 1]

    items[0] = last
    this.size--

    heapifyDown()

    return min
  }

  //  swaps elements at given indices
  swap(index1, index2) {
    let tempItem = items[index1]
    items[index1] = items[index2]
    items[index2] = tempItem
  }

  //  No need for ind as an argument since we will always heapifyUp from last element added
  heapifyUp() {
    let ind = size - 1
    let parentInd = getParentIndex(ind)
    let parentEle = items[parentInd]

    while(hasParent(ind) && parentEle > items[ind]) {
      swap(parentInd, items[ind])
      ind = parentInd
    }
  }

  heapifyDown() {
    let ind = 0
    let ele = items[ind]
    let swapInd

    while(hasLeftChild(ind)) {
      let smallerChild = items[getLeftChildIndex[ind]]
      swapInd = getLeftChildIndex[ind]

      if (smallerChild > items[getRightChildIndex[ind]]) {
        smallerChild = items[getRightChildIndex[ind]]
        swapInd = getRightChildIndex[ind]
      }

      if (ele < smallerChild) break

      swap(ind, swapInd)
    }
  }
}

let myMinHeap = new minHeap
console.log('myMinHeap: ', myMinHeap);
