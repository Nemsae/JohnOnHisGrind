function ThreeInOne() {
  this.array = []
  this.secondInd = 0
  this.thirdInd = 0
}

ThreeInOne.prototype.push1 = function (ele) {
  if (!this.array.length) {
    this.array.unshift(ele)
  } else {
    this.array.splice(this.secondInd, 0, ele)
  }
  this.secondInd++
  this.thirdInd++
}

ThreeInOne.prototype.push2 = function (ele) {
  this.array.splice(this.thirdInd, 0, ele)
  this.thirdInd++
}

ThreeInOne.prototype.push3 = function (ele) {
  this.array.push(ele)
}

ThreeInOne.prototype.peek1 = function () {
  return this.isEmpty1() ? 'Stack1 is Empty' : this.array[this.secondInd - 1]
}

ThreeInOne.prototype.peek2 = function () {
  return this.isEmpty2() ? 'Stack2 is Empty' : this.array[this.thirdInd - 1]
}

ThreeInOne.prototype.peek3 = function () {
  return this.isEmpty3() ? 'Stack3 is Empty' : this.array[this.array.length - 1]
}

ThreeInOne.prototype.isEmpty1 = function () {
  return this.secondInd - 1 > -1 ? false : true
}

ThreeInOne.prototype.isEmpty2 = function () {
  return this.secondInd === this.thirdInd ? true : false
}

ThreeInOne.prototype.isEmpty3 = function () {
  return this.array[this.thirdInd] === undefined ? true : false
}

ThreeInOne.prototype.pop1 = function () {
  let ans;
  if (this.isEmpty1()) {
    ans = 'Stack1 is Empty'
  } else {
    ans = this.array.splice(this.secondInd - 1, 1)[0]
    this.secondInd--
    this.thirdInd--
  }
  return ans
}

ThreeInOne.prototype.pop2 = function () {
  let ans;
  if (this.isEmpty2()) {
    ans = 'Stack2 is Empty'
  } else {
    ans = this.array.splice(this.thirdInd - 1, 1)[0]
    this.thirdInd--
  }
  return ans
}

ThreeInOne.prototype.pop3 = function () {
  let ans;
  if (this.isEmpty3()) {
    ans = 'Stack3 is Empty'
  } else {
    ans = this.array.pop()
  }
  return ans
}


// isEmpty1
// push1
// pop1
// peek1

// let stacks = new ThreeInOne()
//
// console.log('isEmpty1:T ', stacks.isEmpty1());
// console.log('peek1: ', stacks.peek1())
// console.log('pop1: ', stacks.pop1())
// stacks.push1('1a')
// stacks.push1('1b')
// stacks.push1('1c')
// console.log('pop1: ', stacks.pop1())
// console.log('isEmpty1:F ', stacks.isEmpty1());
// console.log('isEmpty2:T ', stacks.isEmpty2());
// console.log('peek2: ', stacks.peek2())
// console.log('pop2: ', stacks.pop2())
// stacks.push2('2a')
// stacks.push2('2b')
// stacks.push2('2c')
// console.log('pop2: ', stacks.pop2())
// console.log('isEmpty2:F ', stacks.isEmpty2());
// console.log('isEmpty3:T ', stacks.isEmpty3());
// console.log('peek3: ', stacks.peek3())
// console.log('pop3: ', stacks.pop3())
// stacks.push3('3a')
// stacks.push3('3b')
// stacks.push3('3c')
// console.log('pop3: ', stacks.pop3())
// console.log('isEmpty3:F ', stacks.isEmpty3());
// console.log('peek1: ', stacks.peek1())
// console.log('peek2: ', stacks.peek2())
// console.log('peek3: ', stacks.peek3())
// console.log('stacks: ', stacks);

/* TESTS */

var t = new ThreeInOne();
t.push1('1a');
t.push1('1b');
t.push1('1c');
t.push2('2a');
t.push2('2b');
t.push2('2c');
t.push3('3a');
t.push3('3b');
t.push3('3c');

var a1 = t.pop1();
var a2 = t.pop2();
var a3 = t.pop3();

var peek1 = t.peek1();
var peek2 = t.peek2();
var peek3 = t.peek3();

var b1 = t.pop1();
var b2 = t.pop2();
var b3 = t.pop3();

var isEmptya1 = t.isEmpty1();
var isEmptya2 = t.isEmpty2();
var isEmptya3 = t.isEmpty3();

var c1 = t.pop1();
var c2 = t.pop2();
var c3 = t.pop3();

var d1 = t.pop1();
var d2 = t.pop2();
var d3 = t.pop3();

var isEmptyb1 = t.isEmpty1();
var isEmptyb2 = t.isEmpty2();
var isEmptyb3 = t.isEmpty3();

console.log(t.array, t.secondInd, t.thirdInd);
console.log(a1, a2, a3);
console.log(peek1, peek2, peek3);
console.log(b1, b2, b3);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(c1, c2, c3);
console.log(d1, d2, d3);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);
