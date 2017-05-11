Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

Subscribe to see which companies asked this question.

var deleteDuplicates = function(head) {
    let p1 = p2 = head

    while (p1 && p1.next !== null) {
        if (p1.val === p2.next.val) {
            let p3 = p2.next.next
            while (p3 !== null && p3.val === p1.val) {
                p3 = p3.next
            }
            p1.next = p3
        }

        p1 = p1.next
        p2 = p1
    }
    return head
};
