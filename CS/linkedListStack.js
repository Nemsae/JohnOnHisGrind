//  Create a Node linked list class that is a Stack


function LinkedList() {
  this.head = null
}

LinkedList.prototype.push = function (val) {
  let node = {
    this.val = val
    this.next = null
  }

  if (this.head === null) {
    this.head = node
  } else {
    let current = this.head

    while (current) {
      if (current.next === null) {
        current.next = node
      }

      current = current.next
    }
  }
};
