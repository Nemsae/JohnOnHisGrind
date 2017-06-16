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
    let initialLength = arr.length

    for (let i = 0; i < arr.length; i++) {
      let currDir = arr[i]
      let prevDir = arr[i-1]
      let nextDir = arr[i+1]

      if (nextDir === key[currDir]) {
        let x = arr.splice(i, 2)
        i--
      } else if (prevDir === key[currDir]) {
        arr.splice(i-1, 2)
        i--
      }
    }

    if (arr.length === initialLength) return arr
  }
}

// console.log(dirReduc(directions))
// console.log(dirReduc(directions2))
// console.log(dirReduc(directions3))
// console.log(dirReduc(directions4))
console.log(dirReduc(directions5))
