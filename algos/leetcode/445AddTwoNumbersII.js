// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

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
    let ansHead = curr = new ListNode()
    let carry = 0, count = 0, max = 0
    let dict = {}

    add(l1)
    count = 0
    add(l2)

    function add(list) {
        if (list === null) return
        add(list.next)

        if (dict[count]) {
            dict[count].push(list.val)
        } else {
            dict[count] = []
            dict[count].push(list.val)
        }

        if (count > max) {
            max = count
        }
        count++
        return
    }

    let ans = [],
        ansLen = 0

    for (let i = 0; i <= max; i++) {
        let sum = dict[i].reduce((c, i, a) => c + i)
        if (carry) sum++

        if (sum > 9) {
            sum = sum - 10
            carry = 1
        } else {
            carry = 0
        }

        ans.push(sum)
        ansLen++
    }

    if (carry) {
        ans.push(1)
        ansLen++
    }

    while (ansLen) {
        curr.val = ans.pop()

        if (ansLen > 1) {
            curr.next = new ListNode()
            curr = curr.next
        }
        ansLen--
    }

    return ansHead
};
