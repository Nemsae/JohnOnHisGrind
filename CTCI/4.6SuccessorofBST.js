const BST = require('../utils/BSTclass')

function successor (root, value) {
  let stack = [],
      stackLen = 0
  let flag = false

  while (root || stackLen) {
    if (flag) {
      // console.log('successor: ', root);
      if (root === null) {
        root = stack.pop()
      } else if (root) {
        while (root.left) {
          root = root.left
        }
        return root.val
      }
      return root.val
    }

    while (root) {
      stack.push(root)
      stackLen++
      root = root.left
    }

    root = stack.pop()
    stackLen--

    if (root.val === value) {
      // console.log('match: ', root);
      flag = true
    }

    root = root.right
  }
}
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

console.log('successor:15 => 17 ', successor(myBST.root, 15));  //  17
console.log('successor:17 => 30 ', successor(myBST.root, 17));  //  30
console.log('successor:30 => 50 ', successor(myBST.root, 30));  //  50
console.log('successor:50 => 51 ', successor(myBST.root, 50));  //  51
console.log('successor:51 => 52 ', successor(myBST.root, 51));  //  52
console.log('successor:52 => 63 ', successor(myBST.root, 52));  //  63
console.log('successor:63 => 70 ', successor(myBST.root, 63));  //  70
console.log('successor:70 => 90 ', successor(myBST.root, 70));  //  90
console.log('successor:90 => 52 ', successor(myBST.root, 90));  //  52
