//  Create a Node linked list class that is a Stack


function LinkedList() {
  this.head = null
}

LinkedList.prototype.push = function (val) {
  let node = {
    value: val,
    next: null
  }

  if (this.head === null) {
    console.log('Sanity:Head is null');
    this.head = node
  } else {
    let current = this.head
    console.log('current: ', current);

    while (current.next !== null) {
      current = current.next
    }

    current.next = node
  }
};

LinkedList.prototype.pop = function () {
  let current = this.head

  if (current === null) return null
  if (current.next === null) {
    let x = current.value
    this.head = null

    return x
  }

  while (current.next.next !== null) {
    current = current.next
  }
  let x = current.next.value

  current.next = null

  return x
};

LinkedList.prototype.peek = function () {
  let current = this.head
  if (current === null) return null
  if (current.next === null) return current.value

  while (current.next !== null) {
    current = current.next
  }

  return current.value
};

let myList = new LinkedList
// console.log('myList: ', myList);

console.log('1: ', myList.push(1))
console.log('Peek: ', myList.peek())
console.log('2: ', myList.push(2))
console.log('Peek: ', myList.peek())
console.log('myList:pushed ', myList);
console.log('3: ', myList.pop())
console.log('Peek: ', myList.peek())
console.log('4: ', myList.pop())
console.log('Peek: ', myList.peek())
console.log('myList:popped ', myList);
