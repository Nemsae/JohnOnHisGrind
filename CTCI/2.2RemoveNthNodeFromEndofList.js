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
     return recurse(head, null, n)

     function recurse(node, prev, n) {
         if (node === null) return 0

         let x = recurse(node.next, node, n)
         let count = typeof x === 'number' ? x + 1 : x

         if (count === n && node === head) {
             return node.next
         } else if (count === n) {
             prev.next = node.next
             return head
         }

         return count
     }
 };

//  ITERATIVE
//  TWO RUNNERS, one runner will go n+1 spaces. Once he reaches that destination
//  we move the two runners forward. Once Leader hits null, we delete node from
//  the slower runner.
 var removeNthFromEnd = function(head, n) {
     let leader = deleter = head

     for (let i = 0; i < n + 1; i++) {
         leader && (leader = leader.next)
     }

     while (leader !== null) {
         leader = leader.next
         deleter = deleter.next
     }

     deleter.next = deleter.next.next

     return head
 };
