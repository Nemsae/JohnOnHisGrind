const BST = require('../utils/BSTclass')

function printPathsofTree(root, p) {
  let allPaths = []
  findAllPaths(root, p, [], 0, allPaths)
  console.log('allPaths: ', allPaths);
}

function findAllPaths(node, p, arr, sum, paths) {
  if (node.val > p) {
    arr = []
    sum = 0
  } else {
    arr.push(node.val)
    sum += node.val

    while (sum > p) {
      sum -= arr.shift()
    }

    if (sum === p) paths.push(arr)
  }

  node.left && findAllPaths(node.left, p, arr, sum)
  node.right && findAllPaths(node.right, p, arr, sum)
}

var pathSum = function(root, sum) {
    if (root === null) return 0
    let allPaths = []
    findAllPaths(root, sum, [], 0)

    function findAllPaths(node, p, currArr, sum) {
      console.log(node.val, 'b4', 'currArr: ', currArr, 'sum: ', sum, 'allPaths: ', allPaths)
    //   if (node.val > p) {
    //     currArr = []
    //     sum = 0
    //   } else {
        // console.log('sanity:allPaths ', allPaths)
        currArr.push(node.val)
        sum += node.val

        console.log('sum:b4 ', sum)
        // console.log('sum:b4 ', sum, 'allPaths: ', allPaths)
        while (p >= 0 && sum > p && currArr.length) {
          sum -= currArr.shift()
        }
        console.log('sum:a4 ', sum)

        if (sum === p && currArr.length) allPaths.push(currArr)
    //   }
      console.log(node.val, 'a4', 'currArr: ', currArr, 'sum: ', sum, 'allPaths: ', allPaths)

      node.left && findAllPaths(node.left, p, currArr.slice(), sum)
      node.right && findAllPaths(node.right, p, currArr.slice(), sum)
    }
    return allPaths.length
};
