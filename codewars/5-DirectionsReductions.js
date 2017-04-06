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

function dirReduc(arr){
  // ...
  let key = {'NORTH':'SOUTH', 'SOUTH':'NORTH', 'WEST':'EAST', 'EAST':'WEST'}
  let rec = []
  // let prevTmp

  for (let i = 0; i < arr.length; i++) {
    let currDir = arr[i]
    let prevDir = arr[i-1]
    let nextDir = arr[i+1]

    console.log('currDir: ', currDir);
    console.log('prevDir: ', prevDir);
    console.log('nextDir: ', nextDir);

    if (nextDir === key[currDir]) {
      console.log('Sanity:NEXT MATCH FOUND');
    } else if (prevDir === key[currDir]) {
      console.log('Sanity:PREV MATCH FOUND');
    } else {
      rec.push(currDir)
      console.log('Sanity:MATCH NOT FOUND');
    }
  }

  return rec
}

// console.log(dirReduc(directions))
console.log(dirReduc(directions2))
// console.log(dirReduc(directions3))
