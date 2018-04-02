/*
 * Complete the function below.
 */

//  n is the cell number
//  return the "1AA" "RC" "Row Column" of the cell number "n"

function getSpreadsheetNotation(n) {
    //  grabRow: first see how many times n goes into 702. This will give us the row number.
    const row = grabRow(n);
    // console.log(n, 'row: ', row);

    //  grabCol: using the leftover from the modulus, that will tell us the column number.
    const col = grabCol(n);
    // console.log(n, 'col: ', col);

    //  convertCol: convert the col integer to a string ex. "AB"
    const colStr = convertColToStr(col);
    // console.log(n, 'colStr: ', colStr);

    const ans = `${row}${colStr}`;
    console.log(n, 'ans: ', ans);
    console.log('\n');
    return ans;
}

function grabRow(number) {
    if (number % 702 === 0) return number / 702;
    return Math.floor(number / 702) + 1;
}

function grabCol(number) {
    if (number % 702 === 0) return 702;
    return number % 702;    //  some integer between 0 - 701
}

function convertColToStr(colNumber) {
    const dict = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'};

    let ans = '';
    let firstCharInd = Math.floor(colNumber / 26);
    if (firstCharInd === 27) firstCharInd = 26;
    const firstChar = dict[firstCharInd] || '';
    ans = ans.concat(firstChar);

    const secondCharInd = colNumber - (firstCharInd * 26);
    if (secondCharInd) {
      const secondChar = dict[secondCharInd];
      ans = ans.concat(secondChar);
    }

    return ans;
//     let firstCharInd = colNumber % 26;       //  some integer between 0 - 25
//     console.log('firstCharInd: ', firstCharInd);
//     if (firstCharInd === 0) firstCharInd = 26;
//     const firstChar = dict[firstCharInd];

//     let secondChar = '';
//     if (colNumber > 26) {
//         let secondCharInd = Math.floor(colNumber / 26);
//         console.log('secondCharInd: ', secondCharInd);
//         if (secondCharInd === 27) secondCharInd -= 1;
//         secondChar = dict[secondCharInd];
//     }

//     return `${secondChar}${firstChar}`;
}

getSpreadsheetNotation(25);   //  1Y
getSpreadsheetNotation(1429);   //  3Y
getSpreadsheetNotation(27);   //  1AA
getSpreadsheetNotation(702);
getSpreadsheetNotation(1431);
