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

        if (carry) {
            console.log('there is a carry')

            l1 ? l1.val = l1.val + carry : l2.val = l2.val + carry
            carry = 0;

            val3 = (l1 && l1.val) + (l2 && l2.val)

            //  Node Creation
            if (ansList === undefined && count === 1) {
                console.log('Node Creation1')
                ansList = new ListNode(val3)
                ansList2 = ansList
                console.log('FIRST CREATION: ', ansList)
            } else if (val3 < 10) {
                console.log(count, 'omega1: ', ansList)

                ansList.next = new ListNode(val3);
                ('NODE CREATION3: ', ansList.next)
                ansList = ansList.next
            }
        }

        //  Check for Carry
        if ((l1 && l1.val) + (l2 && l2.val) > 9 || (l2 && l2.val) + (carry && carry) > 9 || (l1 && l1.val) + (carry && carry) > 9 ) {
            console.log('over 9000!', (l1 && l1.val) + (l2 && l2.val))
            carry = 1;

            let digits = val3.toString().split('')
            val3 = Number(digits[1])
            console.log('val3: ', val3)

            //  Node Creation
            if (ansList === undefined && count === 1) {
                console.log('Node Creation2')
                ansList = new ListNode(val3)
                ansList2 = ansList
                console.log('ansList CREATION: ', ansList)
            } else {
                ansList.next = new ListNode(val3);
                console.log(count, 'omega2: ', ansList)
                ansList = ansList.next
            }
        }

        if (ansList === undefined && count === 1) {
                console.log('Node Creation3')
                ansList = new ListNode(val3)
                ansList2 = ansList
                console.log('ansList CREATION: ', ansList)
        }

        if ((l2 && l2.val) === null || (l2 && l2.val) === null) {
            ansList = ansList.next
            // ansList.next = new ListNode(val3)
            // console.log('ALPHA1: ', val3)
        }

        l1 ? l1 = l1.next : console.log('LOL1')
        l2 ? l2 = l2.next : console.log('LOL2')
        // l2 = l2.next
        count++;
    }
    if (carry) {
        console.log('ansList000: ', ansList)
        ansList.next = new ListNode(1);
    }
    console.log('ANSWER: ', ansList2)
    // console.log('OTHER ANSWER: ', ans)
    return ansList2;
};

//Error with testcase:
// [9,9]
// [9]
