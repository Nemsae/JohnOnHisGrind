// The directions given to the man are, for example, the following:
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
//
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
// ["WEST"]

let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
let directions2 = ["NORTH", "WEST", "SOUTH", "EAST"]
let directions3 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]
let directions4 = ['EAST', 'WEST', 'NORTH', 'SOUTH', 'NORTH',
                  'NORTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH']
let directions5 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']

function dirReduc(arr){
  let key = {'NORTH':'SOUTH', 'SOUTH':'NORTH', 'WEST':'EAST', 'EAST':'WEST'}

  let count = 1

  while (count) {
    console.log('START:arr: ', arr);
    let initialLength = arr.length

    for (let i = 0; i < arr.length; i++) {
      console.log(i, 'arr: ', arr);
      let currDir = arr[i]
      let prevDir = arr[i-1]
      let nextDir = arr[i+1]

      // console.log('currDir: ', currDir);
      // console.log('prevDir: ', prevDir);
      // console.log('nextDir: ', nextDir);

      if (nextDir === key[currDir]) {
        console.log('Sanity:NEXT MATCH FOUND');
        let x = arr.splice(i, 2)
        console.log('x: ', x);
        i--
      } else if (prevDir === key[currDir]) {
        console.log('Sanity:PREV MATCH FOUND');
        arr.splice(i-1, 2)
        i--
      } else {
        console.log('Sanity:MATCH NOT FOUND');
      }
    }

    if (arr.length === initialLength) return arr

    console.log('END:arr: ', arr);
  }
}

// console.log(dirReduc(directions))
// console.log(dirReduc(directions2))
// console.log(dirReduc(directions3))
// console.log(dirReduc(directions4))
console.log(dirReduc(directions5))




// // The directions given to the man are, for example, the following:
// //
// // ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// // or
// // { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// //
// // You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// //
// // ["WEST"]
//
// let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// let directions2 = ["NORTH", "WEST", "SOUTH", "EAST"]
// let directions3 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]
// let directions4 = ['EAST', 'WEST', 'NORTH', 'SOUTH', 'NORTH',
//                   'NORTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH']
// let directions5 = []
//
// function dirReduc(arr){
//   // ...
//   let key = {'NORTH':'SOUTH', 'SOUTH':'NORTH', 'WEST':'EAST', 'EAST':'WEST'}
//   // let prevTmp
//   let count = 2
//   while (count) {
//     let rec = []
//
//     console.log('arr:ALPHA ', arr);
//     let prevFlag = false
//
//     for (let i = 0; i < arr.length; i++) {
//       console.log(i, 'rec: ', rec);
//       let currDir = arr[i]
//       let prevDir = arr[i-1]
//       let nextDir = arr[i+1]
//
//       // console.log('currDir: ', currDir);
//       // console.log('prevDir: ', prevDir);
//       // console.log('nextDir: ', nextDir);
//
//       if (nextDir === key[currDir]) {
//         console.log('Sanity:NEXT MATCH FOUND');
//         prevFlag = true
//       } else if (prevDir === key[currDir] && prevFlag) {
//         console.log('Sanity:PREV MATCH FOUND');
//         prevFlag = false
//       } else {
//         prevFlag = false
//         rec.push(currDir)
//         console.log('Sanity:MATCH NOT FOUND');
//       }
//     }
//
//     if (rec.length === arr.length) return rec
//
//     arr = rec
//     console.log('arr:OMEGA ', arr);
//   }
// }
//
// // console.log(dirReduc(directions))
// // console.log(dirReduc(directions2))
// // console.log(dirReduc(directions3))
// console.log(dirReduc(directions4))
