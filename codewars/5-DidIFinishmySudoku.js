//  If board is done or not return 'Finished!', otherwise return 'Try again!'

function doneOrNot(board){
  //  Check if all rows sum to 36
  let err = 'Try again!'
  let suc = 'Finished!'

  let bigBox = []
  for (let i = 0; i < board.length; i++) {
    //  check if each row is correct
    let row = board[i]
    // console.log('row: ', row);
    let rowSum = row.reduce((c, i, a) => {return c + i}, 0)
    // console.log('rowSum: ', rowSum);
    if (rowSum !== 45) return err
    // else console.log('rowSum is 45')

    let col = []
    let box = []
    let innerBox = 0
    for (let j = 0; j < board[0].length; j++) {
      //  for columns
      let num = board[j][i]
      col.push(num)

      //  for box
      let boxNum = board[i][j]
      innerBox += boxNum
      if ((j + 1) % 3 === 0) {
        box.push(innerBox)
        // console.log('innerBox: ', innerBox);
        innerBox = 0
      }


      //  check if each column is correct

    }
    bigBox.push(box)
    // console.log('box: ', box);
    // console.log('col: ', col);

    let colSum = col.reduce((c, i) => c+i, 0)
    if (colSum !== 45) return err
    // else console.log('colSum is 45')

  }

  // console.log('bigBox: ', bigBox);
  let sumBox = []
  for (let i = 0; i < bigBox[0].length; i++) {
    let sum = 0
    for (let j = 0; j < bigBox.length; j++) {
      let num = bigBox[j][i]
      // console.log('num: ', num);
      sum += num
      if ((j + 1) % 3 === 0) {
        sumBox.push(sum)
        // console.log('sum: ', sum);
        sum = 0
      }
    }
  }
  // console.log('sumBox: ', sumBox);
  // console.log(Math.min(...sumBox))
  // console.log(Math.max(...sumBox))
  if (Math.min(...sumBox) === 45 && Math.max(...sumBox) === 45) return suc
  else return err
}

let test1 =             [[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]

let test2 = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]

console.log(doneOrNot(test1)) //  Finished!
console.log(doneOrNot(test2)) //  Try again!

// Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                          [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                          [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                          [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                          [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                          [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");
//
// Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                          [6, 7, 2, 1, 9, 0, 3, 4, 9],
//                          [1, 0, 0, 3, 4, 2, 5, 6, 0],
//                          [8, 5, 9, 7, 6, 1, 0, 2, 0],
//                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                          [9, 0, 1, 5, 3, 7, 2, 1, 4],
//                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                          [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");
