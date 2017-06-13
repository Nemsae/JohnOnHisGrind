// You have two very large binary trees: T1, with millions of nodes,
// and T2, with hundreds of nodes. Create and algorithm to decide if
// T2 is a subtree of T1.

const BST = require('../utils/BSTclass')

function validateSubtree (root1, root2) {
  let queue = [root1]
  while (root1) {
    root1 = queue.shift()
    if (root1.val === root2.val) {
      // console.log('match: ', root1);
      break
    }
    queue.push(root1.left, root1.right)
  }
  let queue1 = [root1]
  let queue2 = [root2]
  // console.log('queue1: ', queue1, 'queue2: ', queue2 );
  while (root1 || root2) {
    root1 = queue1.shift()
    root2 = queue2.shift()
    console.log('root1: ', root1, 'root2: ', root2 );

    // if (root1 && root2 && root1.val === root2.val) {
    if (root1 && root2) {
      if (root1.val === root2.val) {
        root1.left && queue1.push(root1.left)
        root1.right && queue1.push(root1.right)
        root2.left && queue2.push(root2.left)
        root2.right && queue2.push(root2.right)
      } else {
        return false
      }
    }
    if ((root1 && root2 === undefined) || (root2 && root1 === undefined)) return false
  }
  return true
}

let firstBST = new BST()

firstBST.add(50)
firstBST.add(17)
firstBST.add(30)
firstBST.add(52)
firstBST.add(51)
firstBST.add(70)
firstBST.add(15)
firstBST.add(63)
firstBST.add(90)

let secondBST = new BST()

secondBST.add(17)
secondBST.add(30)
secondBST.add(15)

let thirdBST = new BST()
thirdBST.add(50)
thirdBST.add(17)
thirdBST.add(30)
thirdBST.add(52)
thirdBST.add(51)
thirdBST.add(70)
thirdBST.add(15)
thirdBST.add(63)

// console.log('validateSubtree: ', validateSubtree(firstBST.root, secondBST.root));   //  true
console.log('validateSubtree: ', validateSubtree(firstBST.root, thirdBST.root));   //  false
