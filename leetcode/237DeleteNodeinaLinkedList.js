// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
//
// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.


  // * Definition for singly-linked list.
  // * function ListNode(val) {
  // *     this.val = val;
  // *     this.next = null;
  // * }
  // */
 /**
  * @param {ListNode} node
  * @return {void} Do not return anything, modify node in-place instead.
  */

 var deleteNode = function(node) {
     deleteN(node)

     function deleteN (node) {
         if (node === null) return null

         let nextVal = deleteN(node.next)
         console.log('node: ', node, 'nextVal: ', nextVal)
         if (nextVal === null) {
             node.next = null
         }

         let temp = node.val
         node.val = nextVal
         if (node.next && node.next.val === null) node.next = null
         console.log('node: ', node, 'nextVal: ', nextVal, 'temp: ', temp)
         return temp
     }
 };
