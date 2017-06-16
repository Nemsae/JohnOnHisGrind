/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.minStack.length || x <= this.getMin()) {
      this.minStack.push(x)
    }
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.top() === this.getMin()) {
    this.minStack.pop()
  }
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.slice(-1)[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack.slice(-1)[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let myMinStack = new MinStack
// console.log('myMinStack: ', myMinStack);
// console.log('push: ', myMinStack.push(-2))
// console.log('push: ', myMinStack.push(0))
// console.log('push: ', myMinStack.push(-3))
// console.log(myMinStack)
// console.log('getMin: ', myMinStack.getMin())
// console.log(myMinStack)
// console.log('pop: ', myMinStack.pop())
// console.log(myMinStack)
// console.log('top: ', myMinStack.top())
// console.log(myMinStack)
// console.log('getMin: ', myMinStack.getMin())
// console.log(myMinStack)

console.log('myMinStack: ', myMinStack);
console.log('push: ', myMinStack.push(0))
console.log('push: ', myMinStack.push(1))
console.log('push: ', myMinStack.push(0))
console.log(myMinStack)
console.log('getMin: ', myMinStack.getMin())
console.log(myMinStack)
console.log('pop: ', myMinStack.pop())
console.log(myMinStack)
console.log('getMin: ', myMinStack.getMin())
console.log(myMinStack)

/**
* Your MinStack object will be instantiated and called as such:
var obj = Object.create(MinStack).createNew()
obj.push(x)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
*/
