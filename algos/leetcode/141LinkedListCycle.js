// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?

var hasCycle = function(head) {
    let rabbit = head
    let turtle = head

    while(rabbit && rabbit.next !== null && rabbit.next.next !== null) {
        rabbit = rabbit.next.next
        turtle = turtle.next

        if (rabbit === turtle) {
            return true
        }
    }

    return false
};
