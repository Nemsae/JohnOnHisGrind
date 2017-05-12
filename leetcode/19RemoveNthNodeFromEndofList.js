Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let ans = recurse(head, null, n)

    function recurse(node, prev, n) {
        console.log(0, 'node: ', node, 'prev: ', prev)
        if (node === null) return 0
        let x = recurse(node.next, node, n)
        let count = typeof x === 'number' ? x + 1 : x
        console.log('n: ', n, 'count: ', count)
        if (count === n && prev === null) {
            console.log(1, 'node: ', node, 'prev: ', prev)
            // if (prev === null) {
            //     console.log('sanity')
            //     return null
            // }
            return null

        } else if (count === n) {
            console.log(2, 'node: ', node, 'prev: ', prev)
            prev.next = node.next
            console.log(2, 'node: ', node, 'prev: ', prev)

            return prev
        } else {
            return count
        }
    }

    if (ans === null) {
        return null
    } else {
        return ans
    }

    // return

};
