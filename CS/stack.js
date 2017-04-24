class Stack {
    constructor(x) {
      if (x === undefined) {
        this.size = 0
        this.stuff = []
      } else {
        this.size = 1
        this.stuff = [x]
      }
    }


    push(ele) {
        if (typeof ele !== 'number') {
            console.log('Not a number')
        } else {
            this.stuff.splice(this.size, 0, ele)
            this.size++
            return this.stuff
        }
    }

    peek() {
        return this.stuff[this.size-1]
    }

    pop() {
        let x = this.stuff.splice(this.size-1, 1)
        this.size--

        return x
    }
}

let myStack = new Stack(0)
let myStack2 = new Stack()
console.log('myStack2: ', myStack2.stuff)

console.log(myStack2.push(1))
console.log(myStack.push(1))
console.log(myStack.push(2))
console.log(myStack.push(3))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
