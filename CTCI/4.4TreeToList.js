const BST = require('../utils/BSTclass')

class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

function TreeToList(tree) {
  let depth = 0,
      dict = {}
  // console.log('tree: ', tree);
  recordDepth(tree.root, depth)
  function recordDepth(node, depth) {
    if (node === null) return

    if (dict[depth]) {
      dict[depth].push(node.data)
    } else {
      dict[depth] = [node.data]
    }
    depth++

    recordDepth(node.left, depth)
    recordDepth(node.right, depth)
  }
  console.log('dict: ', dict);
  let depths = Object.keys(dict)
  let ans = []
  for (let i = 0; i < depths.length; i++) {
    let depth = dict[i]
    let head = prev = new Node(depth[0])
    for (let j = 1; j < depth.length; j++) {
      prev.next = new Node(depth[j])
      prev = prev.next
    }
    ans.push(head)
  }
  return ans
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

console.log(TreeToList(myBST))
