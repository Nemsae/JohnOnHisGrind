//  Reverse a singly linked list


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function(head) {
    if (head) {
        return reverse(head, null)
    }
    console.log('final head: ', head)
    return head
};

function reverse (list, previous) {
    console.log('list: ', list, 'previous: ', previous)
    if (list.next !== null) {
        reverse(list.next, list)
    }

    list.next = previous

    return list
}
