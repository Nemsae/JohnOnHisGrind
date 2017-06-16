// Implement a function to check if a binary tree is a binary search tree.
const BST = require ('../utils/BSTclass')

function isValidBST(root) {
  if (root === null) return true

  let BSTArray = []

  pushValuesInOrder(root)

  function pushValuesInOrder(node) {
    node.left && pushValuesInOrder(node.left)
    BSTArray.push(node.val)
    node.right && pushValuesInOrder(node.right)
  }

  return isArraySorted(BSTArray)
}


function isArraySorted(array) {
  let len = array.length

  if (len === 1) {
      return true
  }

  for (let i = 1; i < len; i++) {
    if (array[i] < array[i-1]) {
      return false
    } else if (array[i] === array[i-1]) {
      return false
    }
  }

  return true
}
// function isValidBST(root) {
//   return childrenCheck(root)
//   function childrenCheck(node, previousValue, direction) {
//     if (previousValue && direction === 'left') {
//       return node.val < previousValue ? true : false
//     } else if (previousValue && direction === 'right') {
//       return node.val > previousValue ? true : false
//     }
//
//     let leftChild = node.left && childrenCheck(node.left, node.val, 'left')
//     if (leftChild === false) return false
//     let rightChild = node.right && childrenCheck(node.right, node.val, 'right')
//     if (rightChild === false) return false
//
//     return true
//   }
// }

let myBST = new BST

myBST.add(50)
myBST.add(17)
myBST.add(30)
myBST.add(52)
myBST.add(51)
myBST.add(70)
myBST.add(15)
myBST.add(63)
myBST.add(90)
console.log('myBST: ', myBST);

console.log('isValidBST: ', isValidBST(myBST));
