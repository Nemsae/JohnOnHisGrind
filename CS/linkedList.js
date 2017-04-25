class LinkedList {
  constructor(val) {
    if (val === undefined) {
      this.head = null
      this.len = 0
    } else {
      let node = {
        value: val,
        next: null
      }

      this.head = node
      this.len = 1
    }
  }

  add(val) {
    let node = {
      value: val,
      next: null
    }

    if (this.head === null) {
      this.head = node
      this.len++
    } else {
      //  travel through list and add at end
      let cur = this.head

      while (cur.next !== null) {
        cur = cur.next
      }

      cur.next = node
      this.len++
    }
  }

  search(position) {
    let cur = this.head

    if (this.head === null) {
      return 'Error: List is empty.'
    }

    if (position > this.len) {
      console.log('Invalid Position, Node does not exist')
    }

    let pos = 1
    while (position !== pos) {
      pos++
      cur = cur.next
    }

    return cur.value
  }

  delete(position) {
    console.log('position: ', position);
    let cur = this.head

    //  Position is Invalid
    if (position > this.len || position < 1) return "Error: Can't delete at node that doesn't exist."

    let pos = 1

    while(pos !== position-1) {
      console.log('Sanity:');
      pos++
      cur = cur.next
    }

    let deletedNode = cur.next

    cur.next = cur.next.next  //  'deletes' the node
    this.len--

    return deletedNode.value
  }

}


let myList = new LinkedList
console.log(myList.search(1)) //  Error
myList.add(29)
console.log('myList: ', myList);
myList.add(10)
myList.add(16)
myList.add(17)
myList.add(18)
console.log('Should be 10: ', myList.search(2))
console.log('Should be 17: ', myList.search(4))
console.log(myList.delete(0))   //  Throw error
console.log(myList.delete(2))   //  Deletes 10
console.log('Should be 16: ', myList.search(2))
console.log('myList: ', myList);
