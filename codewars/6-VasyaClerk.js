function tickets(peopleInLine){
  // ...
  let register = 0
  let ticketCost = 25

  for (let i = 0; i < peopleInLine.length; i++) {
    let givenAmount = peopleInLine[i]
    // console.log('givenAmount: ', givenAmount);
    if (givenAmount === 25) {
      register += givenAmount
    } else {
      let change = givenAmount - ticketCost
      // console.log('change: ', change);
      if (register < change) {
        return 'NO'
      } else {
        register += givenAmount
        register -= change
      }
    }
  }
  console.log('At the end of the day, register has: ', register);

  return "YES"
}

console.log(tickets([25, 25, 50, 50]))
console.log(tickets([25, 100]))
