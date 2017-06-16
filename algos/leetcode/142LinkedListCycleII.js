// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
//
// Note: Do not modify the linked list.
//
// Follow up:
// Can you solve it without using extra space?


var detectCycle = function(head) {
  let rabbit = head
  let turtle = head
  let turts = head
  while (rabbit && rabbit.next !== null && rabbit.next.next !== null) {
    rabbit = rabbit.next.next
    turtle = turtle.next
    if (rabbit === turtle) {
      //  if there is a cycle, freeze the rabbit and move turtle and his brother, turts
      while (turtle !== turts) {
        turtle = turtle.next
        turts = turts.next
      }
      return turts
    }
  }
  return null
};

// var detectCycle = function(head) {
//   let rabbit = head
//   let turtle = head
//
//   while (rabbit && rabbit.next !== null && rabbit.next.next !== null) {
//     rabbit = rabbit.next.next
//     turtle = turtle.next
//
//     if (rabbit === turtle) {
//       //  if there is a cycle, move turtle only to calculate the length of the cycle
//       //  and freeze the rabbit
//       let cycleLen = 1
//       turtle = turtle.next
//
//       while (turtle !== rabbit) {
//         turtle = turtle.next
//         cycleLen++
//       }
//
//       //  reset the rabbit and turtle to be the head
//       rabbit = head
//       turtle = head
//
//       // move the turtle the length of the cycle
//       while (cycleLen !== 0) {
//         turtle = turtle.next
//         cycleLen--
//       }
//
//       //  Now move both a step at a time, and when they meet, should be the start of the cycle
//       while (turtle !== rabbit) {
//         turtle = turtle.next
//         rabbit = rabbit.next
//       }
//
//       return rabbit
//     }
//   }
//
//   return null
// };
