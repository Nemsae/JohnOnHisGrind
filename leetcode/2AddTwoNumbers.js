/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log('l1: ', l1.val, 'l2: ', l2.val)
    let count = 1;
    let carry = 0;
    let ansList;
    let ansList2;
    let ans = [];

    while (l1 || l2) {
        let val3 = (l1 && l1.val) + (l2 && l2.val)
        console.log('count: ', count)
        console.log(count, 'l1: ', (l1 && l1.val))
        console.log(count, 'l2: ', (l2 && l2.val))
        if ((l2 && l2.val) === null) {
            val3 = l1.val
            ansList.next = new ListNode(val3)
            console.log('ALPHA1: ', val3)
        } else if ((l1 && l1.val) === null) {
            val3 = l2.val
            ansList.next = new ListNode(val3)
            console.log('ALPHA2: ', ansList)
        }
}
