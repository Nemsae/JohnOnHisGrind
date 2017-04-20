// Consider a sequence u where u is defined as follows:
//
// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
//
// Task:
//
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
//
// Example:
//
// dbl_linear(10) should return 22
//
// Note:
//
// Focus attention on efficiency

function dblLinear(n) {
    let ans
    let tmp = n
    let dict = {}

    if (n === 0) ans = 1

    let seq = [1, 3, 4]
    let index = 1

    let maxCount = 1

    while (n) {
      // let x = seq[index]

      // console.log('x: ', x)

      let y, z
      let set = []
      console.log('set BEFORE: ', set);

      //  FOR ALL NEW VALUES (determined by 'max')
      let max = Math.pow(2, maxCount)

      for (let i = 0; i < max; i++) {
        console.log('max: ', max)
        let x = seq[index]
        y = 2 * x + 1
        z = 3 * x + 1

        console.log('x in loop: ', x)
        // console.log('y in loop: ', y)
        // console.log('z in loop: ', z)

        if (!dict[y]) set.push(y), dict[y] = 1
        if (!dict[z]) set.push(z), dict[z] = 1

        // console.log('seq PRESORT: ', seq);
        // seq.sort((a, b) => a-b)
        // console.log('seq AFTERSORT: ', seq);

        index++ //  Increment index until max for all new values of previous set
      }

      console.log('set AFTER: ', set);

      // console.log('set PRESORT: ', set);
      seq = seq.concat(set.sort((a, b) => a-b))
      console.log('seq AFTSORT: ', seq);

      if (seq[tmp]) return seq[tmp]

      maxCount++
      n--
    }

 return ans
}

let n = 4 // ??
let n0 = 0   //  1
let n1 = 10   //  22
let n2 = 20   //  57
let n3 = 30   //  91
let n4 = 50   //  175
let n5 = 100  //  447

// console.log(dblLinear(n0))
// console.log(dblLinear(n))
console.log(dblLinear(n1))
// dblLinear(n2)
// dblLinear(n3)
// dblLinear(n4)
// dblLinear(n5)
