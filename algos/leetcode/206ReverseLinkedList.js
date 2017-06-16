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
//  ITERATIVE
//  ITERATIVE
var reverseList = function(head) {
    if (head === null) return null
    if (head.next === null) return head

    let curr = head,
        prev = null,
        temp

    while (curr !== null) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev
};

//  RECURSIVE
//  RECURSIVE
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

//  GIVEN INPUT : [1,2]
//  EXPECTED OUTPUT : [2,1]
