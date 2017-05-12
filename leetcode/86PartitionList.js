// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.
//
// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // if (head === null) return null
    // if (x === 0 || 1) return head

    let lowerArr = []
    let higherArr = []
    let curr = head

    while (curr !== null) {
        if (curr.val < x) {
            lowerArr.push(curr)
        } else {
            higherArr.push(curr)
        }

        curr = curr.next
    }

    let finalArr = lowerArr.concat(higherArr),
        newHead = finalArr[0] || null,
        last = finalArr.length - 1
    //  console.log('finalArr: ', finalArr)
    //  console.log('newHead: ', newHead)
    //  console.log('last: ', last)

    for (let i = 0; i < last + 1; i++) {
        let node = finalArr[i]
        let nextNode = finalArr[i+ 1]
        // console.log(0, 'node: ', node, 'nextNode: ', nextNode)
        if (i === last) {
            node.next = null
            // console.log(1, 'last element: ', node)
        } else {
            //  console.log(1, 'node: ', node)
            node.next = nextNode
            // console.log(1, 'node: ', node)
        }
    }
    
    // console.log('newHead')

    return newHead
};
