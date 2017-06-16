class Node {
  constructor () {
    this.val = null
    this.left = null
    this.right = null
  }
}

function minHeightBST(array) {
  let root = new Node()
  setMid(array, root)
  function setMid(arr, node) {
    if (arr.length === 1) {
      node.val = arr[0]
      return
    }
    let midInd = Math.floor(arr.length/2),
        leftArr = arr.slice(0, midInd),
        rightArr = arr.slice(midInd + 1)
    node.val = arr[midInd]
    if (leftArr.length) {
      let leftNode = new Node()
      node.left = leftNode
      setMid(leftArr, leftNode)
    }
    if (rightArr.length) {
      let rightNode = new Node()
      node.right = rightNode
      setMid(rightArr, rightNode)
    }
  }
  return root
}

console.log(minHeightBST([1,2,3,4,5,6,7,8,9,10,11]))
